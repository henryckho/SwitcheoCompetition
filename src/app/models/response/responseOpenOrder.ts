export class ResponseOpenOrder {
    id: string;
    offer_amount: string;
    offer_asset_id: string;
    fills: ResponseFills[];
    want_asset_id: string;
    price: string;
}

export class ResponseFills {
    fill_amount: string;
}