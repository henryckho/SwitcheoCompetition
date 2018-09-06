import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilityService {

    constructor() { }
    
    public getTimestamp(): number{
        return new Date().getTime();
    }
    
    public removeLastDecimalFromBalance(balance: string): string {
        return balance.substring(0, balance.lastIndexOf('.'));
    }

    public convertBalanceToDisplay(balance: string, decimals: number) : string{
        return (parseInt(balance) / Math.pow(10, decimals)).toFixed(decimals);
    }
}