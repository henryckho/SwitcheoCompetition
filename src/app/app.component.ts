import { Component } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title = 'Switcheo Competition';
    private loadLoginComponent = false;
    private loadWalletComponent = false;

    constructor(
        private walletService: WalletService,
    ) { }

    public loadLogin() {
        this.loadLoginComponent = true;
        this.loadWalletComponent = false;
    }

    public changeContract() {
        this.loadLoginComponent = false;
        this.logoutWallet();
    }

    public loadWallet() {
        this.loadWalletComponent = true;
    }

    public logoutWallet() {
        this.walletService.logout();
        this.loadWalletComponent = false;
    }
}
