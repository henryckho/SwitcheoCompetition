import { Component, OnInit } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';

@Component({
    selector: 'sc-wallet',
    templateUrl: 'sc-wallet.component.html'
})

export class SCWalletComponent implements OnInit {
    isLoading: boolean = false;
    isWalletLoaded: boolean = false;
    tokenList: any = null;
    assetList: string[] = [];
    contractWalletBalance: any = {};
    lockedWalletBalance: any = {};

    constructor(
        private switcheoService: SwitcheoService
    ) { }

    ngOnInit() {
        this.switcheoService.getTokenList()
            .subscribe((tokenList) => this.tokenList = tokenList);
    }
    
    public objectKeys = Object.keys;
    public pow = Math.pow;

    public loadWallet() {
        this.isLoading = true;
        this.resetWallet();

        this.switcheoService.getContractWalletBalance()
        .subscribe(walletBalance => {
            this.buildBalances(walletBalance);
            this.isLoading = false;
            this.isWalletLoaded = true;
        });
    }

    public withdraw(blockchain, token, amount) {
        this.switcheoService.withdrawTokens(blockchain, token, amount).subscribe();
    }

    private resetWallet() {
        this.contractWalletBalance = {};
        this.lockedWalletBalance = {};
        this.assetList = [];
    }

    private buildBalances(walletBalance) {
        for(let key of Object.keys(this.tokenList)) {
            let newAsset: boolean = false;
            let confirmedToken = walletBalance.confirmed[key];
            let lockedToken = walletBalance.locked[key];

            if(confirmedToken && confirmedToken > 0) {
                this.contractWalletBalance[key] = confirmedToken.substring(0, confirmedToken.indexOf('.'));
                newAsset = true;
            }

            if(lockedToken && lockedToken > 0) {
                this.lockedWalletBalance[key] = lockedToken.substring(0, lockedToken.indexOf('.'));
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