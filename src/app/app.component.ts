import { Component } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private loadLoginComponent = false;
    private loadWalletComponent = false;
    private loadTradesComponent = false;

    constructor(
        private walletService: WalletService,
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
        this.loadWalletComponent = true;
        this.loadTradesComponent = true;
    }

    public logoutWallet() {
        this.walletService.logout();
        this.loadWalletComponent = false;
        this.loadTradesComponent = false;
    }
}
