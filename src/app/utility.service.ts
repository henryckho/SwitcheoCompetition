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

    public convertBalanceToDisplay(balance: string, decimals: number): string {
        return this.convertNumberToDecimal(parseInt(balance), decimals).toFixed(decimals);
    }

    public convertDisplayToBalance(balance: number, decimals: number): number {
        return parseFloat((balance * Math.pow(10, decimals)).toFixed(0));
    }

    public convertDecimalsForStepInput(decimals: number): number {
        if(decimals > 6) { decimals = 6; }
        return this.convertNumberToDecimal(1, decimals);
    }

    private convertNumberToDecimal(number: number, decimals: number): number {
        return number / Math.pow(10, decimals);
    }
}