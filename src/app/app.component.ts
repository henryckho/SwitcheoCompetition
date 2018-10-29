import { Component } from '@angular/core';
import { WalletService } from './wallet.service';
import { SwitcheoService } from './switcheo.service';
import { ResponseTokenList } from './models/response/responseToken';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private loadLoginComponent = false;
    private loadWalletComponent = false;
    private loadTradesComponent = false;

    private tokenList: ResponseTokenList = {};

    constructor(
        private walletService: WalletService,
        private switcheoService: SwitcheoService
    ) { }

    public loadLogin() {
        this.loadLoginComponent = true;
        this.loadWalletComponent = false;
        this.loadTradesComponent = false;
    }

    public changeContract() {
        this.loadLoginComponent = false;
        this.logoutWallet();
    }

    public loadWalletAndTrades() {
        this.switcheoService.getTokenList()
            .subscribe(
                (tokenList: ResponseTokenList) => {
                    this.tokenList = tokenList;

                    this.loadWalletComponent = true;
                    this.loadTradesComponent = true;
                }
            )
    }

    public logoutWallet() {
        this.walletService.logout();
        this.loadWalletComponent = false;
        this.loadTradesComponent = false;
    }
}
