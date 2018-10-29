import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SCLoginComponent } from './sc-login/sc-login.component';
import { SCWalletComponent } from './sc-wallet/sc-wallet.component';
import { HttpClientModule } from '@angular/common/http';
import { SCContractComponent } from './sc-contract/sc-contract.component';
import { SCTradesComponent } from './sc-trades/sc-trades.component';
import { SCLogoComponent } from './sc-logo/sc-logo.component';
import { SCContentComponent } from './sc-content/sc-content.component';


@NgModule({
  declarations: [
    AppComponent,
    SCLoginComponent,
    SCWalletComponent,
    SCContractComponent,
    SCTradesComponent,
    SCLogoComponent,
    SCContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
