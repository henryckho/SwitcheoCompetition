import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UtilityService } from './utility.service';

@Injectable()
export class SwticheoService {

    private switcheoEndpoint = "https://api.switcheo.network";
    private contractHashV2 = "48756743d524af03aa75729e911651ffd3cbe7d8";

    constructor(
        private http: HttpClient,
        private utilityService: UtilityService) { }

    getContractWalletBalances(privateKey:string):any {
        this.http.get(`${this.switcheoEndpoint}/balances?addresses[]=${privateKey}&contract_hashes[]=${this.contractHashV2}`)
        .pipe(
            tap(x => console.log(x))
        );

    }
}