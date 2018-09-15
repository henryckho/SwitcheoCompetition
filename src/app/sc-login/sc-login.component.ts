import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent {
    @Output() loadWallet = new EventEmitter();
    @Output() logoutWallet = new EventEmitter();
    private address: string = "";
    private privateKey: string = "";
    private loggedIntoWallet: boolean = false;

    constructor(
        private walletService: WalletService
    ) { }

    public loginToWallet() {
        this.loggedIntoWallet = this.walletService.login(this.privateKey);
        if(this.loggedIntoWallet) {
            this.address = this.walletService.getAddress();
            this.loadWallet.emit();
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