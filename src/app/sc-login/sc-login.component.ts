import { Component, EventEmitter, Output } from '@angular/core';
import { UtilityService } from '../utility.service'

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent {
    @Output() loadWallet = new EventEmitter();
    privateKey: string = "";

    constructor(
        private utilityService: UtilityService
    ) { }

    public loginToWallet() {
        let loggedInToWallet = this.utilityService.loginToWallet(this.privateKey);
        if(loggedInToWallet) {
            this.loadWallet.emit();
        }
    }
}