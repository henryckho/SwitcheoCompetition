import { Component, OnInit } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';
import { UtilityService } from '../utility.service';

import { ResponseToken, ResponseTokenList } from '../models/response/responseToken';
import { ResponseContractWallet } from '../models/response/responseContractWallet';
import { ContractWalletBalance } from '../models/contractWalletBalance';
import { LockedWalletBalance } from '../models/lockedWalletBalance';

@Component({
    selector: 'sc-wallet',
    templateUrl: 'sc-wallet.component.html'
})

export class SCWalletComponent implements OnInit {
    public isLoading: boolean = false;
    public isWalletLoaded: boolean = false;
    private tokenList: ResponseTokenList = {};
    private assetList: string[] = [];
    private contractWalletBalance: {[key:string]: ContractWalletBalance} = {};
    private lockedWalletBalance: {[key:string]: LockedWalletBalance} = {};

    constructor(
        private switcheoService: SwitcheoService,
        private utilityService: UtilityService
    ) { }

    ngOnInit() {
        this.switcheoService.getTokenList()
        .subscribe((tokenList: ResponseTokenList) => {
            this.tokenList = tokenList;
            this.loadWallet();
        });
    }

    public loadWallet(): void {
        this.isLoading = true;
        this.resetWallet();

        this.switcheoService.getContractWalletBalance()
            .subscribe((walletBalance: ResponseContractWallet) => {
                this.buildBalances(walletBalance);
                this.isLoading = false;
                this.isWalletLoaded = true;
            });
    }

    public withdraw(blockchain, token): void {
        let tokenAsset: ResponseToken = this.tokenList[token];
        let contractWallet: ContractWalletBalance = this.contractWalletBalance[token];
        let withdrawAmount: number = this.utilityService.convertDisplayToBalance(contractWallet.withdrawAmount, tokenAsset.decimals);
        this.switcheoService.withdrawTokens(blockchain, token, withdrawAmount)
            .subscribe(
                _ => contractWallet.isWithdrawDisabled = true,
                (err) => contractWallet.errorMessage = err.error.error
            );
    }

    public displayInputAsDecimal(element, token) {
        let tokenAsset: ResponseToken = this.tokenList[token];
        element.target.value = Number(element.target.value).toFixed(tokenAsset.decimals);
    }

    private resetWallet(): void {
        this.isWalletLoaded = false;
        this.assetList = [];
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
    }

    private buildBalances(walletBalance: ResponseContractWallet): void {
        for(let key of Object.keys(this.tokenList)) {
            let newAsset: boolean = false;
            let assetDecimals: number = this.tokenList[key].decimals;
            let confirmedToken: string = walletBalance.confirmed[key];
            let lockedToken: string = walletBalance.locked[key];

            if(confirmedToken && parseInt(confirmedToken) > 0) {
                let confirmedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(confirmedToken);
                let confirmedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(confirmedTokenWalletBalance, assetDecimals);
                this.contractWalletBalance[key] = {
                    walletBalance: confirmedTokenWalletBalance,
                    displayBalance: confirmedTokenDisplayBalance,
                    isWithdrawDisabled: false
                };
                newAsset = true;
            }

            if(lockedToken && parseInt(lockedToken) > 0) {
                let lockedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(lockedToken);
                let lockedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(lockedTokenWalletBalance, assetDecimals);
                this.lockedWalletBalance[key] = {
                    walletBalance: lockedTokenWalletBalance,
                    displayBalance: lockedTokenDisplayBalance
                };
                newAsset = true;
            }

            if(newAsset) {
                if(this.assetList.indexOf(key) == -1) {
                    this.assetList.push(key);
                }
            }
        }
    }
}