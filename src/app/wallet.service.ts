import { Injectable } from '@angular/core';
import { u, wallet } from '@cityofzion/neon-js';

import stringify from 'json-stable-stringify';

@Injectable({ providedIn: 'root' })
export class WalletService {
    private loggedInWallet: wallet.Account = null;
    public canAccessPrivateKey: boolean = false;

    constructor() { }

    public login(key: string): boolean {
        this.loggedInWallet = null;

        if(key) {
            let isAddress = wallet.isAddress(key);
            this.canAccessPrivateKey = isAddress ? false : wallet.isWIF(key) || wallet.isPrivateKey(key);
            if(isAddress || this.canAccessPrivateKey) {                
                this.loggedInWallet = new wallet.Account(key);
            }
        }
        
        return this.loggedInWallet != null;
    }

    public logout(): void {
        this.loggedInWallet = null;
        this.canAccessPrivateKey = false;
    }

    public getAddress(): string {
        return this.loggedInWallet.address;
    }

    public getPrivateKey(): string {
        return this.loggedInWallet.privateKey;
    }

    public getScriptHash(): string{
        return this.loggedInWallet.scriptHash;
    }
    
    public signParams(reqParams): string {
        let paramsString: string = stringify(reqParams);
        let paramsHexString: string = u.str2hexstring(paramsString);
        
        let lengthHex: string = (paramsHexString.length / 2).toString(16).padStart(2, '0');
        let serialisedTransaction: string = `010001f0${lengthHex}${paramsHexString}0000`;
        return this.signMessage(serialisedTransaction);
    }

    private signMessage(message: string): string {
        let privateKey = this.getPrivateKey();
        return wallet.generateSignature(message, privateKey);
    }
}