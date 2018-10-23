import { Component, OnInit, Input } from '@angular/core';

import { config } from '../app.config';
import { SwitcheoService } from '../switcheo.service';
import { WalletService } from '../wallet.service';

import { ResponseOpenOrder } from '../models/response/responseOpenOrder';
import { ResponseTokenList, ResponseToken } from '../models/response/responseToken';
import { OpenOrdersBalance } from '../models/openOrdersBalance';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'sc-trades',
    templateUrl: 'sc-trades.component.html'
})

export class SCTradesComponent implements OnInit {
    @Input() tokenList: ResponseTokenList;
    private imgDir: string = config.IMG_DIR;
    private isLoading: boolean = true;
    private canAccessPrivateKey: boolean = false;
    private unknownErrorMessage: string = config.UNKNOWN_ERROR_MESSAGE;
    private showUnknownErrorMessage: boolean = false;
    private openOrdersBalances: OpenOrdersBalance[] = [];

    constructor(
        private utilityService: UtilityService,
        private walletService: WalletService,
        private switcheoService: SwitcheoService
    ) { }

    ngOnInit() {
        this.isLoading = true;
        this.canAccessPrivateKey = this.walletService.canAccessPrivateKey;
        this.switcheoService.getOpenOrders()
            .subscribe(
                (openOrders: ResponseOpenOrder[]) => {
                    this.buildOpenOrdersBalances(openOrders);
                    this.isLoading = false;
                },
                _ => this.showUnknownErrorMessage = true
            );
    }

    private buildOpenOrdersBalances(openOrders: ResponseOpenOrder[]) {
        for(let i = 0; i < openOrders.length; i++) {
            let responseOrder: ResponseOpenOrder = openOrders[i];
            let token: string = Object.keys(this.tokenList).filter((token)=>{
                return this.tokenList[token].hash == responseOrder.offer_asset_id;
            })[0];

            let offerAmount = this.utilityService.convertBalanceToDisplay(responseOrder.offer_amount, this.tokenList[token].decimals);

            let order: OpenOrdersBalance = {
                id: responseOrder.id,
                offerAmount: offerAmount,
                tokenName: token,
                token: this.tokenList[token]
            }
            this.openOrdersBalances.push(order);
        }
    }
}