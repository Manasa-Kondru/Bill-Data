import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UploadBillComponent } from './upload-bill/upload-bill.component';
import { HistoricBillsComponent } from './historic-bills/historic-bills.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path:'historic-bills',component:HistoricBillsComponent
      },
      {
        path:'upload-bill',component:UploadBillComponent
      },
      {
        path: '', redirectTo: 'historic-bills', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
