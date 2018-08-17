import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service'

@Component({
    selector: 'sc-login',
    templateUrl: 'sc-login.component.html'
})

export class SCLoginComponent implements OnInit {
    privateKey: string = "";

    constructor(
        private utilityService: UtilityService
    ) { }

    public ngOnInit() {
    }

    public loginToWallet() {
        this.utilityService.loginToWallet(this.privateKey);
    }
}