import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/shared/data.service';
import { Subscription } from 'rxjs';
// import { UniquefilterPipe } from 'src/shared/uniquefilter.pipe';

@Component({
  selector: 'app-historic-bills',
  templateUrl: './historic-bills.component.html',
  styleUrls: ['./historic-bills.component.scss']
})
export class HistoricBillsComponent implements OnChanges {
  xldata: any[] = [];
  @Input() parentData: any[] = [];
  private parentDataSubscription: Subscription | null = null; // Initialize with null
  displayArray: any[] = [];
  concatenatedArray: any[] = [];
  propertyToFilter: string = 'Month- Year(MM-YYYY)'; // Change this to the desired property
  uniqueArray: any[] = [];

  constructor(private dataService: DataService) {
    this.subscribeToParentData();
  }

  private subscribeToParentData() {
    if (this.parentDataSubscription) {
      this.parentDataSubscription.unsubscribe();
    }
    this.parentDataSubscription = this.dataService.parentData$.subscribe(
      (data) => {
        this['parentData'] = data; // Use index signature notation to access the property
        // console.log('Received data in historicData:', this['parentData']);
        this.displayArray = [...this.displayArray, ...this['parentData']];
        // this.uniqueArray = this.uniqueDisplayArray(this.displayArray);
      }
    );
  }


  uniqueDisplayArray(displayarr:any[]): any[] {
    const seen = new Set(); // Set to keep track of seen property values
    for (const bill of displayarr) {
      const key = bill[this.propertyToFilter]; // Get the property value for comparison
      if (!seen.has(key)) { // Check if the property value is already seen
        seen.add(key); // Add the property value to the seen set
        this.uniqueArray.push(bill); // Add the unique object to the uniqueArray
        console.log(this.uniqueArray);
      }
    }
    return this.uniqueArray; // Return the array with unique elements based on the property
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['parentData']) {
      this.subscribeToParentData();
    }
  }

  removeDuplicates(arr: any[]): any[] {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  }

  trackByMethod(index: number, el: any) {
    return el['Energy Charges'];
  }

  ngOnDestroy() {
    if (this.parentDataSubscription) {
      this.parentDataSubscription.unsubscribe();
    }
  }
}
