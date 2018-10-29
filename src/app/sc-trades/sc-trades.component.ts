import { Component, OnInit, Input } from '@angular/core';

import { config } from '../app.config';
import { SwitcheoService } from '../switcheo.service';
import { WalletService } from '../wallet.service';

import { ResponseOpenOrder } from '../models/response/responseOpenOrder';
import { ResponseTokenList } from '../models/response/responseToken';
import { OpenOrdersBalance } from '../models/openOrdersBalance';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'sc-trades',
    templateUrl: 'sc-trades.component.html'
})

export class SCTradesComponent implements OnInit {
    @Input() tokenList: ResponseTokenList;
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
        this.updateTrades();
    }

    public cancelTrade(orderIdToCancel: string): void {
        this.switcheoService.cancelOrder(orderIdToCancel)
            .subscribe(
                _ => {
                    this.isLoading = true;
                    this.showUnknownErrorMessage = false;
                    this.updateTrades();
                }
            );
    }

    private updateTrades(): void {
        this.openOrdersBalances.length = 0;
        this.switcheoService.getOpenOrders()
            .subscribe(
                (openOrders: ResponseOpenOrder[]) => {
                    this.buildOpenOrdersBalances(openOrders);
                    this.isLoading = false;
                },
                _ => this.showUnknownErrorMessage = true
            );
    }

    private buildOpenOrdersBalances(openOrders: ResponseOpenOrder[]): void {
        for(let i = 0; i < openOrders.length; i++) {
            let responseOrder: ResponseOpenOrder = openOrders[i];
            let offerTokenName: string = this.getTokenFromTokenScriptHash(responseOrder.offer_asset_id);
            let wantTokenName: string = this.getTokenFromTokenScriptHash(responseOrder.want_asset_id);
            
            let totalFilledOfferAmount = responseOrder.fills.reduce(function(value, orderFill) {
                return value + parseInt(orderFill.fill_amount);
            }, 0);
            let offerAmountLeft = parseInt(responseOrder.offer_amount) - totalFilledOfferAmount;
            let orderOfferAmountLeft = this.utilityService.convertBalanceToDisplay(offerAmountLeft.toString(), this.tokenList[offerTokenName].decimals);

            let order: OpenOrdersBalance = {
                id: responseOrder.id,
                offerAmount: orderOfferAmountLeft,
                offerTokenName: offerTokenName,
                offerToken: this.tokenList[offerTokenName],
                price: responseOrder.price,
                wantTokenName: wantTokenName,
                wantToken: this.tokenList[wantTokenName]
            }
            this.openOrdersBalances.push(order);
        }
    }

    private getTokenFromTokenScriptHash(scriptHash: string): string {
        return Object.keys(this.tokenList).filter((token)=>{
            return this.tokenList[token].hash == scriptHash;
        })[0];
    }
}