import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AccordionModule } from 'ngx-bootstrap/accordion';


import { HdfcFundTransferComponent } from './fund-transfer/hdfc-fund-transfer/hdfc-fund-transfer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SbiFundTransferComponent } from './fund-transfer/sbi-fund-transfer/sbi-fund-transfer.component';
import { HdfcDepositComponent } from './deposit/hdfc-deposit/hdfc-deposit.component';
import { SbiDepositComponent } from './deposit/sbi-deposit/sbi-deposit.component';


@NgModule({
  declarations: [


    AppComponent,
    HdfcFundTransferComponent,
    MainLayoutComponent,
    SbiFundTransferComponent,
    HdfcDepositComponent,
    SbiDepositComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
