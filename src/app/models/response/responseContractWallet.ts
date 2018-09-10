export class ResponseContractWallet {
    confirmed: {
        [key:string]: string
    };
    confirming: ConfirmingWallet[];
    locked: {
        [key:string]: string
    };
}

export class ConfirmingWallet {
    amount: string;
    asset_id: string;
    created_at: string;
    event_type: string;
    id: string;
    transaction_hash: string;
}