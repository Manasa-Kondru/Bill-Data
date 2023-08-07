import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-bill',
  templateUrl: './upload-bill.component.html',
  styleUrls: ['./upload-bill.component.scss']
})
export class UploadBillComponent {

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  myForm: FormGroup;
  xldata: any[] = [];
  selectedSection: 'xlinfo' | 'forminfo'; // Add this variable

  constructor(private dialogRef: MatDialogRef<UploadBillComponent>, private fb: FormBuilder) {
    const xlinfo = this.fb.group({
      fileInput: [''], // Initialize with the initial value if needed
    });

    const forminfo = this.fb.group({
      'Month- Year(MM-YYYY)': ['', Validators.required],
      'Contracted Load((KW)': ['', Validators.required],
      'Units': ['', Validators.required],
      'Energy Charges': ['', Validators.required],
      'Fixed Charges': ['', Validators.required],
      'Custom Charges': ['', Validators.required],
      'ED(Electric Duty)': ['', Validators.required],
      'Additional Charges': ['', Validators.required],
      'Additional Surcharge': ['', Validators.required],
      'Monthly Sales Revenue': ['', Validators.required]
    });

    this.myForm = this.fb.group({
      xlinfo,
      forminfo
    });

    this.selectedSection = 'forminfo';

  }
  dummyarray: any[] = [];

  onSubmit() {
    if (this.selectedSection === 'xlinfo') {
      this.submit.emit(this.xldata);
    }
    else {
      this.dummyarray.push(this.myForm.get('forminfo')?.value);
      this.process1();
      this.submit.emit(this.dummyarray);
    }
    this.dialogRef.close();
  }

  onSelectingFile() {
    this.selectedSection = 'xlinfo'
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
      let date: any = new Date(new Date(new Date().setUTCHours(0, 0, 0, 0)).setUTCFullYear(values[1], values[0] - 1, 1)).getTime();
      ele['Month- Year(MM-YYYY)'] = date;
      return ele;
    });
  }

  process1() {
    this.dummyarray?.map((ele: any) => {
      let values: any = (ele['Month- Year(MM-YYYY)']);
      values = values.split("-");
      let date: any = new Date(new Date(new Date().setUTCHours(0, 0, 0, 0)).setUTCFullYear(values[1], values[0] - 1, 1)).getTime();
      ele['Month- Year(MM-YYYY)'] = date;
      return ele;
    });
  }



  trackByMethod(index: number, el: any) {
    return el['Energy Charges'];
  }




}
