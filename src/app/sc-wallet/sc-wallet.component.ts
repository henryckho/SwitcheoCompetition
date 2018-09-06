import { Component, OnInit } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';
import { UtilityService } from '../utility.service';

import { Token } from '../models/token';

@Component({
    selector: 'sc-wallet',
    templateUrl: 'sc-wallet.component.html'
})

export class SCWalletComponent implements OnInit {
    public isLoading: boolean = false;
    public isWalletLoaded: boolean = false;
    private tokenList: Token[] = [];
    private assetList: string[] = [];
    private contractWalletBalance: any = {};
    private lockedWalletBalance: any = {};

    constructor(
        private switcheoService: SwitcheoService,
        private utilityService: UtilityService
    ) { }

    ngOnInit() {
        this.switcheoService.getTokenList()
            .subscribe((tokenList: Token[]) => this.tokenList = tokenList);
    }

    public loadWallet(): void {
        this.isLoading = true;
        this.resetWallet();

        this.switcheoService.getContractWalletBalance()
        .subscribe(walletBalance => {
            this.buildBalances(walletBalance);
            this.isLoading = false;
            this.isWalletLoaded = true;
        });
    }

    public withdraw(blockchain, token, contractWallet): void {
        contractWallet.isWithdrawDisabled = true;
        this.switcheoService.withdrawTokens(blockchain, token, contractWallet.walletBalance).subscribe();
    }

    private resetWallet(): void {
        this.isWalletLoaded = false;
        this.assetList = [];
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
    }

    private buildBalances(walletBalance): void {
        for(let key of Object.keys(this.tokenList)) {
            let newAsset: boolean = false;
            let assetDecimals = this.tokenList[key].decimals;
            let confirmedToken = walletBalance.confirmed[key];
            let lockedToken = walletBalance.locked[key];

            if(confirmedToken && confirmedToken > 0) {
                let confirmedTokenWalletBalance = this.utilityService.removeLastDecimalFromBalance(confirmedToken);
                let confirmedTokenDisplayBalance = this.utilityService.convertBalanceToDisplay(confirmedTokenWalletBalance, assetDecimals);
                this.contractWalletBalance[key] = {
                    walletBalance: confirmedTokenWalletBalance,
                    displayBalance: confirmedTokenDisplayBalance,
                    isWithdrawDisabled: false
                };
                newAsset = true;
            }

            if(lockedToken && lockedToken > 0) {
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