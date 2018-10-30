import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageType } from '../enum/MessageType';
import { config } from '../app.config';

@Component({
    selector: 'sc-messages',
    templateUrl: 'sc-messages.component.html'
})

export class SCMessagesComponent implements OnInit {
    @Input() showMessage: boolean;
    @Input() messageType: MessageType;
    @Input() customMessage: string;
    @Output() showMessageChange = new EventEmitter<boolean>();

    private message: string = "";
    private classType: string = "";
    constructor() { }

    ngOnInit() {
        switch(this.messageType) {
            case MessageType.UnknownError:
                this.message = config.UNKNOWN_ERROR_MESSAGE;
                this.classType = "danger";
                break;
            case MessageType.LoginError:
                this.message = config.LOGIN_ERROR_MESSAGE;
                this.classType = "danger";
                break;
            case MessageType.RefreshError:
                this.message = config.REFRESH_ERROR_WALLET_MESSAGE;
                this.classType = "danger"
                break;
            case MessageType.WithdrawInvalid:
                this.message = config.WITHDRAW_INVALID_AMOUNT_MESSAGE;
                this.classType = "danger";
                break;
            case MessageType.WithdrawSuccess:
                this.message = config.WITHDRAW_SUCCESS_WALLET_MESSAGE;
                this.classType = "success";
                break;
        }

        if(this.customMessage) {
            this.message = this.customMessage;
        }
    }

    public hideMessage(): void {
        this.showMessageChange.emit(false);
    }
}