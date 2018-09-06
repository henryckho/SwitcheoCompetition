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
        let paramsString: string = stringify(reqParams);
        let paramsHexString: string = u.str2hexstring(paramsString);
        
        let lengthHex: string = (paramsHexString.length / 2).toString(16).padStart(2, '0');
        let serialisedTransaction: string = `010001f0${lengthHex}${paramsHexString}0000`;
        return this.signMessage(serialisedTransaction);
    }

    public signTransaction(transaction: tx.Transaction, privateKey: string) {
        let serialisedTxn: string = tx.serializeTransaction(transaction, false)
        return wallet.generateSignature(serialisedTxn, privateKey)
    }
    
    public getTimestamp(): number{
        return new Date().getTime();
    }
    
    public removeLastDecimalFromBalance(balance: string): string {
        return balance.substring(0, balance.lastIndexOf('.'));
    }

    public convertBalanceToDisplay(balance: string, decimals: number) : string{
        return (parseInt(balance) / Math.pow(10, decimals)).toFixed(decimals);
    }
    
    private signMessage(message: string): string {
        let privateKey = this.loggedInWallet.privateKey;
        return wallet.generateSignature(message, privateKey);
    }
}