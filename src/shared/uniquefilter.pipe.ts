import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniquefilter'
})
export class UniquefilterPipe implements PipeTransform {
  transform(array: any[], propertyToFilter: string): any[] {
    if (!array || !array.length || !propertyToFilter) {
      return [];
    }

    const uniqueMap: { [key: string]: boolean } = {};

    const uniqueArray: any[] = [];

    for (const item of array) {
      const key = item[propertyToFilter];

      if (!uniqueMap[key]) {
        uniqueMap[key] = true;
        uniqueArray.push(item);
      } else {
        // Handle duplicates if needed
        // You can store the duplicate information for further processing if required
        window.alert('Duplicate record');
      }
    }

    return uniqueArray;
  }

}
