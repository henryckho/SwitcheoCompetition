import { Component, OnInit } from '@angular/core';
import { SwitcheoService } from '../switcheo.service';
import { ResponseTokenList } from '../models/response/responseToken';

@Component({
    selector: 'sc-content',
    templateUrl: 'sc-content.component.html'
})

export class SCContentComponent implements OnInit {
    private tokenList: ResponseTokenList = {};

    constructor(
        private switcheoService: SwitcheoService
    ) { }

    ngOnInit() {
        this.loadWalletAndTrades();
    }

    private loadWalletAndTrades() {
        this.switcheoService.getTokenList()
            .subscribe(
                (tokenList: ResponseTokenList) => {
                    this.tokenList = tokenList;
                }
            )
    }
}