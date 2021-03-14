import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HdfcDepositComponent } from './deposit/hdfc-deposit/hdfc-deposit.component';
import { SbiDepositComponent } from './deposit/sbi-deposit/sbi-deposit.component';

import { HdfcFundTransferComponent } from './fund-transfer/hdfc-fund-transfer/hdfc-fund-transfer.component';
import { SbiFundTransferComponent } from './fund-transfer/sbi-fund-transfer/sbi-fund-transfer.component';


const routes: Routes = [

  { path: 'hdfc-fund-transfer', component: HdfcFundTransferComponent },
  { path: 'sbi-fund-transfer', component: SbiFundTransferComponent },
  { path: 'hdfc-money-deposit', component: HdfcDepositComponent },
  { path: 'sbi-money-deposit', component: SbiDepositComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
