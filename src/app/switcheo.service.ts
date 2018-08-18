import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UtilityService } from './utility.service';

@Injectable({ providedIn: 'root' })
export class SwitcheoService {
    private switcheoEndpoint = "https://test-api.switcheo.network/v2";
    private contractHashV2 = "a195c1549e7da61b8da315765a790ac7e7633b82";
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(
        private http: HttpClient,
        private utilityService: UtilityService
    ) { }

    public getTokenList(): Observable<Response> {
        return this.http.get<any>(`${this.switcheoEndpoint}/exchange/tokens`);
    }

    public getContractWalletBalance(): Observable<Response> {
        let scriptHashAddress = this.utilityService.loggedInWallet.scriptHash;
        return this.http.get<any>(`${this.switcheoEndpoint}/balances?addresses[]=${scriptHashAddress}&contract_hashes[]=${this.contractHashV2}`);
    }

    public withdrawTokens(blockchain:string, token: string, amount: string): Observable<Object> {
        let address = this.utilityService.loggedInWallet.scriptHash;
        let params = { blockchain, asset_id: token, amount, contract_hash: this.contractHashV2, timestamp: this.utilityService.getTimestamp() };
        let signature = this.utilityService.signParams(params);
        let apiParams = this.utilityService.stringifyParams({ ...params, address, signature });

        console.log(apiParams);
        return this.http.post(`${this.switcheoEndpoint}/withdrawals`, apiParams, this.httpOptions);
    }
}