import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent {
    @Output() loadWallet = new EventEmitter();
    private privateKey: string = "";

    constructor(
        private walletService: WalletService
    ) { }

    public loginToWallet() {
        let loggedInToWallet = this.walletService.loginToWallet(this.privateKey);
        if(loggedInToWallet) {
            this.loadWallet.emit();
        }
    }
}