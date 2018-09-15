import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title = 'Switcheo Competition';
    private loadLoginComponent = false;
    private loadWalletComponent = false;

    public loadLogin() {
        this.loadLoginComponent = true;
        this.loadWalletComponent = false;
    }

    public changeContract() {
        this.loadLoginComponent = false;
        this.loadWalletComponent = false;
    }

    public loadWallet() {
        this.loadWalletComponent = true;
    }
}
