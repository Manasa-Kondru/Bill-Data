import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bills', loadChildren: () => import('src/app/bills/bills.module').then((m) => m.BillsModule) },
  { path: '', redirectTo: 'bills', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
