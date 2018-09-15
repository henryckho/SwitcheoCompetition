import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';

import { WalletService } from './wallet.service';
import { UtilityService } from './utility.service';

import { config } from './app.config';

import { CreateWithdraw } from './models/createWithdraw';
import { ExecuteWithdraw } from './models/executeWithdraw';
import { ResponseCreateWithdraw } from './models/response/responseCreateWithdraw';
import { ResponseTokenList } from './models/response/responseToken';
import { ResponseContractWallet } from './models/response/responseContractWallet';
import { ResponseContract, ResponseContractList } from './models/response/responseContract';
import { DeploymentType } from './enum/DeploymentType';
import { ContractVersion } from './enum/ContractVersion';

@Injectable({ providedIn: 'root' })
export class SwitcheoService {
    private switcheoEndpoint: string = "";
    private contractHash: string = "";
    private blockchain: string = "NEO";

    constructor(
        private http: HttpClient,
        private utilityService: UtilityService,
        private walletService: WalletService
    ) { }

    public setDeploymentType(deploymentType: DeploymentType) {
        switch(deploymentType) {
            case DeploymentType.Mainnet:
                this.switcheoEndpoint = config.MAINNET_URL;
                break;
            case DeploymentType.Testnet:
                this.switcheoEndpoint = config.TESTNET_URL;
                break;
        }
    }

    public selectContract(deploymentType: DeploymentType, contractVersion: ContractVersion): Observable<ResponseContract> {
        this.setDeploymentType(deploymentType);
        return this.getContracts()
                    .pipe(
                        tap((response: ResponseContractList) => this.contractHash = response[this.blockchain][ContractVersion[contractVersion]])
                    );
    }

    public getTokenList(): Observable<ResponseTokenList> {
        return this.http.get<ResponseTokenList>(`${this.switcheoEndpoint}/exchange/tokens`);
    }

    public getContractWalletBalance(): Observable<ResponseContractWallet> {
        let scriptHashAddress: string = this.walletService.getScriptHash();
        return this.http.get<ResponseContractWallet>(`${this.switcheoEndpoint}/balances?addresses[]=${scriptHashAddress}&contract_hashes[]=${this.contractHash}`);
    }

    public withdrawTokens(blockchain: string, token: string, amount: number): Observable<Object> {
        return this.createWithdrawTokens(blockchain, token, amount)
        .pipe(
            mergeMap((response: ResponseCreateWithdraw) => this.executeWithdrawToken(response.id))
        );
    }

    private getContracts(): Observable<ResponseContract> {
        return this.http.get<ResponseContract>(`${this.switcheoEndpoint}/exchange/contracts`);
    }

    private createWithdrawTokens(blockchain: string, token: string, amount: number): Observable<ResponseCreateWithdraw> {
        let address: string = this.walletService.getScriptHash();
        let params: CreateWithdraw = {
            blockchain,
            asset_id: token,
            amount,
            contract_hash: this.contractHash,
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