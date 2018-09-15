import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../wallet.service';
import { config } from '../app.config';

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent {
    @Output() loadWallet = new EventEmitter();
    @Output() logoutWallet = new EventEmitter();
    private loggedIntoWallet: boolean = false;
    private address: string = "";
    private privateKey: string = "";
    private errorMessage: string = "";

    constructor(
        private walletService: WalletService
    ) { }

    public loginToWallet() {
        this.loggedIntoWallet = this.walletService.login(this.privateKey);
        if(this.loggedIntoWallet) {
            this.address = this.walletService.getAddress();
            this.loadWallet.emit();
        } else {
            this.errorMessage = config.LOGIN_ERROR_MESSAGE;
        }
    }

    public logoutOfWallet() {
        this.loggedIntoWallet = false;
        this.address = "";
        this.privateKey = "";
        this.walletService.logout();
        this.logoutWallet.emit();
    }
}