import { Component, OnInit } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';
import { UtilityService } from '../utility.service';

import { ResponseToken, ResponseTokenList } from '../models/response/responseToken';
import { ResponseContractWallet, ConfirmingWallet } from '../models/response/responseContractWallet';
import { ContractWalletBalance } from '../models/contractWalletBalance';
import { LockedWalletBalance } from '../models/lockedWalletBalance';

import { config } from '../app.config';
import { WalletService } from '../wallet.service';

@Component({
    selector: 'sc-wallet',
    templateUrl: 'sc-wallet.component.html',
    styleUrls: ['sc-wallet.component.css']
})

export class SCWalletComponent implements OnInit {
    private isLoading: boolean = false;
    private imgDir: string = config.IMG_DIR;
    private tokenList: ResponseTokenList = {};
    private assetListContractWallet: string[] = [];
    private assetListLockedWallet: string[] = [];
    private assetListConfirmingWallet: string[] = [];
    private contractWalletBalance: {[key:string]: ContractWalletBalance} = {};
    private lockedWalletBalance: {[key:string]: LockedWalletBalance} = {};
    private confirmingWalletBalance: {[key:string]: ConfirmingWallet[]} = {};
    private lastUpdatedBalance: number = null;
    private refreshMessage: string = "";
    private canAccessPrivateKey: boolean = false;

    constructor(
        private switcheoService: SwitcheoService,
        private utilityService: UtilityService,
        private walletService: WalletService
    ) { }

    ngOnInit() {
        this.canAccessPrivateKey = this.walletService.canAccessPrivateKey;

        this.switcheoService.getTokenList()
            .subscribe((tokenList: ResponseTokenList) => {
                this.tokenList = tokenList;
                this.isLoading = true;
                this.resetWallet();
                this.updateWalletBalances();
            });
    }

    public withdraw(blockchain, token): void {
        let contractWallet: ContractWalletBalance = this.contractWalletBalance[token];
        if(contractWallet.withdrawAmount && !isNaN(contractWallet.withdrawAmount)) {
            let tokenAsset: ResponseToken = this.tokenList[token];
            let withdrawAmount: number = this.utilityService.convertDisplayToBalance(contractWallet.withdrawAmount, tokenAsset.decimals);
            contractWallet.isWithdrawDisabled = true;
            this.switcheoService.withdrawTokens(blockchain, token, withdrawAmount)
                .subscribe(
                    _ => this.updateWalletBalances(),
                    (err) => {
                        contractWallet.errorMessage = err.error.error;
                        contractWallet.isWithdrawDisabled = false;
                    }
                );
        } else {
            contractWallet.errorMessage = config.WITHDRAW_INVALID_AMOUNT_MESSAGE;
        }
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

    public handleImgError(element) {
        element.target.src = `${this.imgDir}/empty.png`;
    }

    public refreshBalance(): void {
        let millisecondsNow = new Date().getTime();
        let oneMinute: number = 60000;
        let refreshTimeElapsed: number = millisecondsNow - this.lastUpdatedBalance;
        if(refreshTimeElapsed > oneMinute) {
            this.isLoading = true;
            this.refreshMessage = "";
            this.updateWalletBalances();
        } else {
            this.refreshMessage = config.REFRESH_WALLET_MESSAGE;
        }
    }

    private resetWallet(): void {
        this.assetListContractWallet = [];
        this.assetListLockedWallet = [];
        this.assetListConfirmingWallet = [];
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
    }

    private updateWalletBalances(): void {
        this.switcheoService.getContractWalletBalance()
            .subscribe((walletBalance: ResponseContractWallet) => {
                this.lastUpdatedBalance = new Date().getTime();
                this.buildWalletBalances(walletBalance);
                this.isLoading = false;
            });
    }

    private buildWalletBalances(walletBalance: ResponseContractWallet): void {
        let confirmingWallet: {[key:string]: ConfirmingWallet[]} = walletBalance.confirming;
        for(let key of Object.keys(this.tokenList)) {
            this.removeAsset(key);

            let assetDecimals: number = this.tokenList[key].decimals;
            let confirmedToken: string = walletBalance.confirmed[key];
            let lockedToken: string = walletBalance.locked[key];
            let confirmingWalletTx: ConfirmingWallet[] = confirmingWallet[key]

            if(confirmedToken && Number(confirmedToken) > 0) {
                let confirmedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(confirmedToken);
                let confirmedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(confirmedTokenWalletBalance, assetDecimals);
                this.contractWalletBalance[key] = {
                    walletBalance: confirmedTokenWalletBalance,
                    displayBalance: confirmedTokenDisplayBalance,
                    isWithdrawDisabled: false,
                    withdrawInputSteps: this.utilityService.convertDecimalsForStepInput(assetDecimals)
                };
                this.assetListContractWallet.push(key);
            }

            if(lockedToken && Number(lockedToken) > 0) {
                let lockedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(lockedToken);
                let lockedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(lockedTokenWalletBalance, assetDecimals);
                this.lockedWalletBalance[key] = {
                    walletBalance: lockedTokenWalletBalance,
                    displayBalance: lockedTokenDisplayBalance
                };
                this.assetListLockedWallet.push(key);
            }

            if(confirmingWalletTx && confirmingWalletTx.length > 0) {
                this.confirmingWalletBalance[key] = confirmingWalletTx;
                this.assetListConfirmingWallet.push(key);
            }
        }
    }

    private removeAsset(token: string) {
        let existingAssetContractWallet: number = this.assetListContractWallet.indexOf(token);
        let existingAssetLockedWallet: number = this.assetListLockedWallet.indexOf(token);
        let existingAssetConfirmingWallet: number = this.assetListConfirmingWallet.indexOf(token);

        if(existingAssetContractWallet > -1) {
            this.assetListContractWallet.splice(existingAssetContractWallet, 1);
        }
        if(existingAssetLockedWallet > -1) {
            this.assetListLockedWallet.splice(existingAssetLockedWallet, 1);
        }
        if(existingAssetConfirmingWallet > -1) {
            this.assetListConfirmingWallet.splice(existingAssetConfirmingWallet, 1);
        }
        delete this.contractWalletBalance[token];
        delete this.lockedWalletBalance[token];
    }
}