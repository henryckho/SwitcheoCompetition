import { Component, OnInit, ViewChild } from '@angular/core';
import { SwitcheoService } from '../switcheo.service';
import { ResponseTokenList } from '../models/response/responseToken';
import { SCWalletComponent } from '../sc-wallet/sc-wallet.component';
import { SCTradesComponent } from '../sc-trades/sc-trades.component';
import { config } from '../app.config';

@Component({
    selector: 'sc-content',
    templateUrl: 'sc-content.component.html'
})

export class SCContentComponent implements OnInit {
    @ViewChild(SCWalletComponent) walletChild: SCWalletComponent;
    @ViewChild(SCTradesComponent) tradesChild: SCTradesComponent;

    private tokenList: ResponseTokenList = {};
    private lastUpdatedBalance: number = new Date().getTime();;
    private refreshMessage: string = config.REFRESH_ERROR_WALLET_MESSAGE;
    private showRefreshMessage: boolean = false;

    constructor(
        private switcheoService: SwitcheoService
    ) { }

    ngOnInit() {
        this.loadWalletAndTrades();
    }

    public refresh(): void {
        let millisecondsNow = new Date().getTime();
        let refreshDisabledPeriod: number = 10000;
        let refreshTimeElapsed: number = millisecondsNow - this.lastUpdatedBalance;
        if(refreshTimeElapsed > refreshDisabledPeriod) {
            this.lastUpdatedBalance = new Date().getTime();
            this.showRefreshMessage = false;
            this.refreshBalances();
            this.tradesChild.refreshTrades();
        } else {
            this.showRefreshMessage = true;
        }
    }

    public refreshBalances(): void {
        this.walletChild.refreshBalances();
    }

    private loadWalletAndTrades(): void {
        this.switcheoService.getTokenList()
            .subscribe(
                (tokenList: ResponseTokenList) => {
                    this.tokenList = tokenList;
                }
            )
    }
}