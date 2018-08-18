import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilityService } from '../utility.service'

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent implements OnInit {
    @Output() loadWallet = new EventEmitter();
    privateKey: string = "";

    constructor(
        private utilityService: UtilityService
    ) { }

    public ngOnInit() {
    }

    public loginToWallet() {
        let loggedInToWallet = this.utilityService.loginToWallet(this.privateKey);
        if(loggedInToWallet) {
            this.loadWallet.emit();
        }
    }
}