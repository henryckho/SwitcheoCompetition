import { Component } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private loadLoginComponent = false;
    private loadContentComponent = false;

    constructor(
        private walletService: WalletService
    ) { }

    public changeContract() {
        this.loadLoginComponent = false;
        this.logoutWallet();
    }

    public loadLogin() {
        this.loadLoginComponent = true;
        this.loadContentComponent = false;
    }

    public logoutWallet() {
        this.walletService.logout();
        this.loadContentComponent = false;
    }

    public loadContent() {
        this.loadContentComponent = true;
    }
}
