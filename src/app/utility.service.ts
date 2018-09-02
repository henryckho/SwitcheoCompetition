import { Injectable } from '@angular/core';
import { u, wallet, tx } from '@cityofzion/neon-js';

import stringify from 'json-stable-stringify';

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

    public signParams(reqParams): string {
        let paramsString = stringify(reqParams);
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
    
    public removeLastDecimalFromBalance(balance) {
        return balance.substring(0, balance.lastIndexOf('.'));
    }

    public convertBalanceToDisplay(balance, decimal) : string{
        return (balance / Math.pow(10, decimal)).toFixed(decimal);
    }
    
    private signMessage(message: string): string {
        let privateKey = this.loggedInWallet.privateKey;
        return wallet.generateSignature(message, privateKey);
    }
}