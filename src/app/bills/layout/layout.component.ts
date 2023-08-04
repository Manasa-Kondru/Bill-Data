import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadBillComponent } from '../upload-bill/upload-bill.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private router:Router,private matdialog: MatDialog)
  {

  }

//   routeTo()
//   {
// this.router.navigate(['bills/upload-bill'])
//   }

  upload() {
    this.matdialog.open(UploadBillComponent, { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms', width: '500px' })
  }

}
