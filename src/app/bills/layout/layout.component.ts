import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadBillComponent } from '../upload-bill/upload-bill.component';
import { DataService } from 'src/shared/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private router: Router, private matdialog: MatDialog, private dataService: DataService) {

  }

  //   routeTo()
  //   {
  // this.router.navigate(['bills/upload-bill'])
  //   }
  parentData: any[] = [];

  upload() {
    const dialogRef = this.matdialog.open(UploadBillComponent, { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms', width: '500px' })
    dialogRef.componentInstance.submit.subscribe((xlData: any[]) => {
      this.parentData = xlData;
    
      this.dataService.updateParentData(this.parentData);
      console.log('Received data in LayoutComponent:', this.parentData);
    });
  }




}
