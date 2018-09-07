import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { WalletService } from './wallet.service';
import { UtilityService } from './utility.service';

import { CreateWithdraw } from './models/createWithdraw';
import { ExecuteWithdraw } from './models/executeWithdraw';
import { ResponseCreateWithdraw } from './models/response/responseCreateWithdraw';
import { ResponseToken } from './models/response/responseToken';

@Injectable({ providedIn: 'root' })
export class SwitcheoService {
    private switcheoEndpoint: string = "https://test-api.switcheo.network/v2";
    private contractHashV2: string = "a195c1549e7da61b8da315765a790ac7e7633b82";

    constructor(
        private http: HttpClient,
        private utilityService: UtilityService,
        private walletService: WalletService
    ) { }

    public getTokenList(): Observable<ResponseToken[]> {
        return this.http.get<ResponseToken[]>(`${this.switcheoEndpoint}/exchange/tokens`);
    }

    public getContractWalletBalance(): Observable<Response> {
        let scriptHashAddress: string = this.walletService.getScriptHash();
        return this.http.get<any>(`${this.switcheoEndpoint}/balances?addresses[]=${scriptHashAddress}&contract_hashes[]=${this.contractHashV2}`);
    }

    public withdrawTokens(blockchain: string, token: string, amount: string): Observable<Object> {
        return this.createWithdrawTokens(blockchain, token, amount)
        .pipe(
            mergeMap((response: ResponseCreateWithdraw) => this.executeWithdrawToken(response.id))
        );
    }

    private createWithdrawTokens(blockchain: string, token: string, amount: string): Observable<ResponseCreateWithdraw> {
        let address: string = this.walletService.getScriptHash();
        let params: CreateWithdraw = {
            blockchain,
            asset_id: token,
            amount,
            contract_hash: this.contractHashV2,
            timestamp: this.utilityService.getTimestamp()
        };
        let signature: string = this.walletService.signParams(params);
        let apiParams = { ...params, address, signature };

        return this.http.post<ResponseCreateWithdraw>(`${this.switcheoEndpoint}/withdrawals`, apiParams);
    }

    private executeWithdrawToken(id: string) : Observable<Object> {
        let params: ExecuteWithdraw = {
            id,
            timestamp: this.utilityService.getTimestamp()
        };
        let signature: string = this.walletService.signParams(params);
        let apiParams = { ...params, signature };
        
        return this.http.post(`${this.switcheoEndpoint}/withdrawals/${id}/broadcast`, apiParams);
    }
}