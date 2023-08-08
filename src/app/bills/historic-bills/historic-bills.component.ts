import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'src/shared/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historic-bills',
  templateUrl: './historic-bills.component.html',
  styleUrls: ['./historic-bills.component.scss']
})
export class HistoricBillsComponent implements OnChanges {
  @Input() parentData: any[] = [];
  private parentDataSubscription: Subscription | null = null; // Initialize with null
  displayArray: any[] = [];
  propertyToFilter: string = 'Month- Year(MM-YYYY)'; // Change this to the desired property

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
        this.displayArray = [...this.displayArray, ...this['parentData']];
      }
    );
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
