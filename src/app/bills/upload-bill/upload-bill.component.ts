import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-bill',
  templateUrl: './upload-bill.component.html',
  styleUrls: ['./upload-bill.component.scss']
})
export class UploadBillComponent {


  myForm: FormGroup;
  xldata: any[] = [];

  constructor(  private dialogRef: MatDialogRef<UploadBillComponent>,private fb: FormBuilder)
  {
    this.myForm = this.fb.group({
      fileInput: [''], // Initialize with the initial value if needed
  })
}

onSubmit()
{
  
}


  ReadExcel(event: any) {
    //storing uploaded file data
    let data = event?.target.files[0];

    //Reading file as Binary String
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(data);

    fileReader.onload = () => {
      let workbook = XLSX.read(fileReader.result, { type: 'binary', cellDates: true });
      let sheetNames = workbook.SheetNames;
      this.xldata = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
    }
    fileReader.onloadend = () => {
      this.process();
    }
  }

  process() {
    this.xldata?.map((ele: any) => {
      let values: any = (ele['Month- Year(MM-YYYY)']);
      values = values.split("-");
      let date: any = new Date(new Date(new Date().setUTCHours(0, 0, 0, 0)).setUTCFullYear(values[1], values[0] - 1,1)).getTime();
      ele['Month- Year(MM-YYYY)'] = date;
      return ele;
    });
  }

  trackByMethod(index: number, el: any) {
    return el['Energy Charges'];
  }




}
