import { Injectable } from '@angular/core';

import { stringify } from 'json-stable-stringify';
import { u, wallet } from '@cityofzion/neon-js';

@Injectable({ providedIn: 'root' })
export class UtilityService {

    loggedInWallet: wallet.Account = null;

    constructor() { }

    public loginToWallet(privateKey: string) : boolean {
        this.loggedInWallet = null;

        if(privateKey) {
            try {
                this.loggedInWallet = new wallet.Account(privateKey);
            }
            catch{}
        }
        
        return this.loggedInWallet != null;
    }

    public getScriptHashFromAddress(address) {
        return wallet.getScriptHashFromAddress(address);
    }

    signMessage(message, privateKey) {
        return wallet.generateSignature(message, privateKey);
    }

    encodeMessage(message) {
        let paramHexString = u.str2hexstring(message)
    }

    private paramsToString(params) {
        return stringify(params);
    }

    private seraliseParamStringToHex(message) {
        return u.str2hexstring(message)
    }
}