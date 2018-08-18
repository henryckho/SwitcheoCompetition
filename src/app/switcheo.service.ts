import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { UtilityService } from './utility.service';

@Injectable({ providedIn: 'root' })
export class SwticheoService {
    private switcheoEndpoint = "https://api.switcheo.network/v2";
    private contractHashV2 = "91b83e96f2a7c4fdf0c1688441ec61986c7cae26";

    constructor(
        private http: HttpClient,
        private utilityService: UtilityService
    ) { }

    public getTokenList(): Observable<Response> {
        return this.http.get<any>(`${this.switcheoEndpoint}/exchange/tokens`);
    }

    public getContractWalletBalance(): Observable<Response> {
        let scriptHashAddress = this.utilityService.loggedInWallet.scriptHash
        return this.http.get<any>(`${this.switcheoEndpoint}/balances?addresses[]=${scriptHashAddress}&contract_hashes[]=${this.contractHashV2}`);
    }
}