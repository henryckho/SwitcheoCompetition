import { Injectable } from '@angular/core';
import { u, wallet, tx } from '@cityofzion/neon-js';

@Injectable({ providedIn: 'root' })
export class UtilityService {
    private stringify = require('json-stable-stringify');

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

    public signParams(reqParams): string {
        let paramsString = this.stringify(reqParams);
        let paramsHexString = u.str2hexstring(paramsString);
        
        let lengthHex = (paramsHexString.length / 2).toString(16).padStart(2, '0');
        let serialisedTransaction = `010001f0${lengthHex}${paramsHexString}0000`;
        return this.signMessage(serialisedTransaction);
    }

    public signTransaction(transaction: tx.Transaction, privateKey: string) {
        let serialisedTxn = tx.serializeTransaction(transaction, false)
        return wallet.generateSignature(serialisedTxn, privateKey)
    }
    
    public getTimestamp() {
        return new Date().getTime();
    }

    public stringifyParams(params) {
        return this.stringify(params);
    }
    
    private signMessage(message: string): string {
        let privateKey = this.loggedInWallet.privateKey;
        return wallet.generateSignature(message, privateKey);
    }
}