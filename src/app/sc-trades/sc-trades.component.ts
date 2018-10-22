import { Component, OnInit } from '@angular/core';

import { SwitcheoService } from '../switcheo.service';
import { UtilityService } from '../utility.service';

import { ResponseToken, ResponseTokenList } from '../models/response/responseToken';
import { ResponseContractWallet } from '../models/response/responseContractWallet';
import { ContractWalletBalance } from '../models/contractWalletBalance';
import { LockedWalletBalance } from '../models/lockedWalletBalance';

import { config } from '../app.config';
import { WalletService } from '../wallet.service';

@Component({
    selector: 'sc-trades',
    templateUrl: 'sc-trades.component.html',
    styleUrls: ['sc-trades.component.css']
})

export class SCTradesComponent {
    constructor(
        private walletService: WalletService
    ) { }

    
}