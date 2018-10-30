export class ContractWalletBalance {
    walletBalance: string;
    displayBalance: string;
    withdrawInputSteps?: number;
    withdrawAmount?: number;
    isWithdrawDisabled?: boolean = false;
    errorMessage?: string = "";
}