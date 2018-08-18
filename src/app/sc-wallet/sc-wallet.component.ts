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
    walletBalance: any = {};

    constructor(
        private utilityService: UtilityService,
        private switcheoService: SwticheoService
    ) { }

    ngOnInit() {
        this.switcheoService.getTokenList()
            .subscribe((tokenList) => this.tokenList = tokenList);
    }
    
    public objectKeys = Object.keys;
    public power = Math.pow;

    public loadWallet() {
        this.isLoading = true;
        this.switcheoService.getContractWalletBalance()
        .subscribe(walletBalance => {
            this.buildWalletBalance(walletBalance);
            this.isLoading = false;
            this.isWalletLoaded = true;
        });
    }

    private buildWalletBalance(walletBalance) {
        for(let key of Object.keys(walletBalance.confirmed)){
            let token = this.tokenList[key];
            let confirmedToken = walletBalance.confirmed[key];
            if(confirmedToken > 0) {
                this.walletBalance[key] = confirmedToken / Math.pow(10, token.decimals)
            }
        }
    }
}