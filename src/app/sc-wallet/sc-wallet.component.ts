import { Component, OnInit, Input } from '@angular/core';

import { UtilityService } from '../utility.service';
import { SwticheoService } from '../switcheo.service';

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
        private utilityService: UtilityService,
        private switcheoService: SwticheoService
    ) { }

    ngOnInit() {
        this.switcheoService.getTokenList()
            .subscribe((tokenList) => this.tokenList = tokenList);
    }
    
    public objectKeys = Object.keys;

    public loadWallet() {
        this.isLoading = true;
        this.switcheoService.getContractWalletBalance()
        .subscribe(walletBalance => {
            this.buildBalances(walletBalance);
            this.isLoading = false;
            this.isWalletLoaded = true;
        });
    }

    private buildBalances(walletBalance) {
        for(let key of Object.keys(this.tokenList)) {
            let tokenDecimal: number = Math.pow(10, this.tokenList[key].decimals);
            let newAsset: boolean = false;
            let confirmedToken = walletBalance.confirmed[key];
            let lockedToken = walletBalance.locked[key];

            if(confirmedToken && confirmedToken > 0) {
                this.contractWalletBalance[key] = confirmedToken / tokenDecimal;
                newAsset = true;
            }

            if(lockedToken && lockedToken > 0) {
                this.lockedWalletBalance[key] = lockedToken / tokenDecimal;
                newAsset = true;
            }

            if(newAsset) {
                this.assetList.push(key);
            }
        }
    }
}