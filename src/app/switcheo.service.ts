import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { UtilityService } from './utility.service';

import { ResponseToken } from './models/responseToken';
import { Token } from './models/token';
import { CreateWithdraw } from './models/createWithdraw';
import { ResponseCreateWithdraw } from './models/responseCreateWithdraw';

@Injectable({ providedIn: 'root' })
export class SwitcheoService {
    private switcheoEndpoint = "https://test-api.switcheo.network/v2";
    private contractHashV2 = "a195c1549e7da61b8da315765a790ac7e7633b82";

    constructor(
        private http: HttpClient,
        private utilityService: UtilityService
    ) { }

    public getTokenList(): Observable<Token[]> {
        return this.http.get(`${this.switcheoEndpoint}/exchange/tokens`)
            .pipe(
                map((response: any) => {
                    let tokenList: Token[] = [];
                    Object.keys(response).forEach(key => {
                        let responseToken: ResponseToken = response[key];
                        let token: Token = {
                            decimals: responseToken.decimals,
                            hash: responseToken.hash
                        };
                        tokenList[key] = token;
                    });
                    return tokenList;
                })
            );
    }

    public getContractWalletBalance(): Observable<Response> {
        let scriptHashAddress: string = this.utilityService.loggedInWallet.scriptHash;
        return this.http.get<any>(`${this.switcheoEndpoint}/balances?addresses[]=${scriptHashAddress}&contract_hashes[]=${this.contractHashV2}`);
    }

    public withdrawTokens(blockchain: string, token: string, amount: string): Observable<object> {
        return this.createWithdrawTokens(blockchain, token, amount)
        .pipe(
            mergeMap((response: ResponseCreateWithdraw) => this.executeWithdrawToken(response.id))
        );
    }

    private createWithdrawTokens(blockchain: string, token: string, amount: string): Observable<ResponseCreateWithdraw> {
        let address: string = this.utilityService.loggedInWallet.scriptHash;
        let params: CreateWithdraw = {
            blockchain: blockchain,
            asset_id: token,
            amount: amount,
            contract_hash: this.contractHashV2,
            timestamp: this.utilityService.getTimestamp()
        };
        let signature: string = this.utilityService.signParams(params);
        let apiParams = { ...params, address, signature };

        return this.http.post<ResponseCreateWithdraw>(`${this.switcheoEndpoint}/withdrawals`, apiParams);
    }

    private executeWithdrawToken(id: string) : Observable<Object> {
        let params = {id, timestamp: this.utilityService.getTimestamp() };
        let signature = this.utilityService.signParams(params);
        let apiParams = { ...params, signature };
        
        return this.http.post(`${this.switcheoEndpoint}/withdrawals/${id}/broadcast`, apiParams);
    }
}