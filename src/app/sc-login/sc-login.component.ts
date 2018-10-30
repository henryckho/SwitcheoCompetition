import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../wallet.service';
import { MessageType } from '../enum/MessageType';

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent {
    @Output() loadWallet = new EventEmitter();
    @Output() logoutWallet = new EventEmitter();
    private loggedIntoWallet: boolean = false;
    private address: string = "";
    private key: string = "";
    
    private loginErrorMessageType: MessageType = MessageType.LoginError;
    private showErrorMessage: boolean = false;

    constructor(
        private walletService: WalletService
    ) { }

    public loginToWallet(): void {
        this.loggedIntoWallet = this.walletService.login(this.key);
        if(this.loggedIntoWallet) {
            this.showErrorMessage = false;
            this.address = this.walletService.getAddress();
            this.loadWallet.emit();
        } else {
            this.showErrorMessage = true;
        }
    }

    public logoutOfWallet(): void {
        this.loggedIntoWallet = false;
        this.address = "";
        this.key = "";
        this.walletService.logout();
        this.logoutWallet.emit();
    }
}