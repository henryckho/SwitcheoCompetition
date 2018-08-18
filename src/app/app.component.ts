import { Component, ViewChild } from '@angular/core';
import { SCWalletComponent } from './sc-wallet/sc-wallet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SCWalletComponent) scWallet: SCWalletComponent;

  title = 'Switcheo Competition';

  public loadWallet() {
    this.scWallet.loadWallet();
  }
}
