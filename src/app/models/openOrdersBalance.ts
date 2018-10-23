import { ResponseToken } from "./response/responseToken";

export class OpenOrdersBalance {
    id: string;
    offerAmount: string;
    tokenName: string;
    token: ResponseToken;
}