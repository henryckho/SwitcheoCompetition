import { Injectable } from '@angular/core';
import { u, wallet, tx } from '@cityofzion/neon-js';

import stringify from 'json-stable-stringify';

@Injectable({ providedIn: 'root' })
export class WalletService {
    private loggedInWallet: wallet.Account = null;

    constructor() { }

    public login(privateKey: string): boolean {
        this.loggedInWallet = null;

        if(privateKey) {
            try {
                this.loggedInWallet = new wallet.Account(privateKey);
            }
            catch{}
        }
        
        return this.loggedInWallet != null;
    }

    public logout(): void {
        this.loggedInWallet = null;
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