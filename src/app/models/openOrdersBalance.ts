import { ResponseToken } from "./response/responseToken";

export class OpenOrdersBalance {
    id: string;
    offerAmount: number;
    tokenName: string;
    token: ResponseToken;
}