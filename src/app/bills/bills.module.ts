import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UploadBillComponent } from './upload-bill/upload-bill.component';
import { HistoricBillsComponent } from './historic-bills/historic-bills.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    UploadBillComponent,
    HistoricBillsComponent
  ],
  imports: [
    CommonModule,
    BillsRoutingModule,MatFormFieldModule,
    MatInputModule,ReactiveFormsModule
  ]
})
export class BillsModule { }
