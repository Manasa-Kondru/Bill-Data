import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-historic-bills',
  templateUrl: './historic-bills.component.html',
  styleUrls: ['./historic-bills.component.scss']
})
export class HistoricBillsComponent {
  xldata: any[] = [];

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
