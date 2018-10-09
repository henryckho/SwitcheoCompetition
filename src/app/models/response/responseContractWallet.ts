export class ResponseContractWallet {
    confirmed: {
        [key:string]: string
    };
    confirming: {
        [key:string] : ResponseConfirmingWallet[]   
    };
    locked: {
        [key:string]: string
    };
}

export class ResponseConfirmingWallet {
    amount: string;
    asset_id: string;
    created_at: string;
    event_type: string;
    id: string;
    transaction_hash: string;
}