import { Component, OnInit, Input } from '@angular/core';

import { config } from '../app.config';
import { SwitcheoService } from '../switcheo.service';
import { UtilityService } from '../utility.service';
import { WalletService } from '../wallet.service';

import { ResponseToken, ResponseTokenList } from '../models/response/responseToken';
import { ResponseContractWallet } from '../models/response/responseContractWallet';
import { ContractWalletBalance } from '../models/contractWalletBalance';
import { LockedWalletBalance } from '../models/lockedWalletBalance';

@Component({
    selector: 'sc-wallet',
    templateUrl: 'sc-wallet.component.html'
})

export class SCWalletComponent implements OnInit {
    @Input() tokenList: ResponseTokenList;
    
    private isLoading: boolean = true;
    private assetListContractWallet: string[] = [];
    private assetListLockedWallet: string[] = [];
    private contractWalletBalance: {[key:string]: ContractWalletBalance} = {};
    private lockedWalletBalance: {[key:string]: LockedWalletBalance} = {};
    private lastUpdatedBalance: number = null;
    private withdrawMessage: string = config.WITHDRAW_SUCCESS_WALLET_MESSAGE;
    private refreshMessage: string = config.REFRESH_ERROR_WALLET_MESSAGE;
    private unknownErrorMessage: string = config.UNKNOWN_ERROR_MESSAGE;
    private emptyWalletMessage: string = config.EMPTY_WALLET_MESSAGE;
    private showWithdrawMessage: boolean = false;
    private showRefreshMessage: boolean = false;
    private showUnknownErrorMessage: boolean = false;
    private canAccessPrivateKey: boolean = false;

    constructor(
        private switcheoService: SwitcheoService,
        private utilityService: UtilityService,
        private walletService: WalletService
    ) { }

    ngOnInit() {
        this.isLoading = true;
        this.canAccessPrivateKey = this.walletService.canAccessPrivateKey;
        this.updateWalletBalances();
    }

    public handleInputWithdraw(element, token): void {
        let tokenAsset: ResponseToken = this.tokenList[token];

        if(element.data == "-") {
            element.target.value = 0;
            return;
        }
        
        //Handle the length of the input text
        let fixedDecimalValue: string = Number(element.target.value).toFixed(tokenAsset.decimals);
        if(element.target.value.length > fixedDecimalValue.length) {
            element.target.value = fixedDecimalValue;
        }

        //Handle the value of the input
        let numberValue: number = Number(element.target.value);
        let walletBalance: ContractWalletBalance = this.contractWalletBalance[token];
        if(numberValue > Number(walletBalance.displayBalance)) {
            element.target.value = walletBalance.displayBalance;
        }
    }

    public refreshBalance(): void {
        let millisecondsNow = new Date().getTime();
        let refreshDisabledPeriod: number = 10000;
        let refreshTimeElapsed: number = millisecondsNow - this.lastUpdatedBalance;
        if(refreshTimeElapsed > refreshDisabledPeriod) {
            this.showRefreshMessage = false;
            this.updateWalletBalances();
        } else {
            this.showRefreshMessage = true;
        }
    }

    public withdraw(blockchain: string, token: string): void {
        let contractWallet: ContractWalletBalance = this.contractWalletBalance[token];
        if(contractWallet.withdrawAmount && !isNaN(contractWallet.withdrawAmount)) {
            let tokenAsset: ResponseToken = this.tokenList[token];
            let withdrawAmount: number = this.utilityService.convertDisplayToBalance(contractWallet.withdrawAmount, tokenAsset.decimals);
            contractWallet.isWithdrawDisabled = true;
            this.switcheoService.withdrawTokens(blockchain, token, withdrawAmount)
                .subscribe(
                    _ => {
                        this.showWithdrawMessage = true;
                        this.updateWalletBalances()
                    },
                    (err) => {
                        this.isLoading = false;
                        this.showWithdrawMessage = false;
                        contractWallet.isWithdrawDisabled = false;
                        if(err.error != null && err.error.error != undefined) {
                            contractWallet.errorMessage = err.error.error;
                        } else {
                            this.showUnknownErrorMessage = true;
                        }
                    }
                );
        } else {
            contractWallet.errorMessage = config.WITHDRAW_INVALID_AMOUNT_MESSAGE;
        }
    }

    private resetWallet(): void {
        this.assetListContractWallet = [];
        this.assetListLockedWallet = [];
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
    }

    private updateWalletBalances(): void {
        this.isLoading = true;
        this.resetWallet();
        this.switcheoService.getContractWalletBalance()
            .subscribe(
                (walletBalance: ResponseContractWallet) => {
                    this.lastUpdatedBalance = new Date().getTime();
                    this.buildWalletBalances(walletBalance);
                },
                _ => this.showUnknownErrorMessage = true,
                () => this.isLoading = false
            );
    }

    private buildWalletBalances(walletBalance: ResponseContractWallet): void {
        for(let key of Object.keys(this.tokenList)) {
            let assetDecimals: number = this.tokenList[key].decimals;

            let confirmedTokenBalance: string = walletBalance.confirmed[key];
            if(confirmedTokenBalance && Number(confirmedTokenBalance) > 0) {
                this.buildConfirmedWalletBalances(key, confirmedTokenBalance, assetDecimals);
            }

            let lockedTokenBalance: string = walletBalance.locked[key];
            if(lockedTokenBalance && Number(lockedTokenBalance) > 0) {
                this.buildLockedWalletBalances(key, lockedTokenBalance, assetDecimals);
            }
        }
    }

    private buildConfirmedWalletBalances(key: string, confirmedTokenBalance: string, assetDecimals: number): void {
        let confirmedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(confirmedTokenBalance);
        let confirmedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(confirmedTokenWalletBalance, assetDecimals);
        this.contractWalletBalance[key] = {
            walletBalance: confirmedTokenWalletBalance,
            displayBalance: confirmedTokenDisplayBalance,
            isWithdrawDisabled: false,
            withdrawInputSteps: this.utilityService.convertDecimalsForStepInput(assetDecimals)
        };
        this.assetListContractWallet.push(key);
    }

    private buildLockedWalletBalances(key: string, lockedTokenBalance: string, assetDecimals): void {
        let lockedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(lockedTokenBalance);
        let lockedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(lockedTokenWalletBalance, assetDecimals);
        this.lockedWalletBalance[key] = {
            walletBalance: lockedTokenWalletBalance,
            displayBalance: lockedTokenDisplayBalance
        };
        this.assetListLockedWallet.push(key);
    }
}