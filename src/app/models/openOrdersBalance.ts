import { ResponseToken } from "./response/responseToken";

export class OpenOrdersBalance {
    id: string;
    offerAmount: string;
    offerTokenName: string;
    offerToken: ResponseToken;
    wantTokenName: string;
    wantToken: ResponseToken;
    price: string;
}