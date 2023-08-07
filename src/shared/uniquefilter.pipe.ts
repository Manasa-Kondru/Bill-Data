import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniquefilter'
})
export class UniquefilterPipe implements PipeTransform {

  transform(array: any[], propertyToFilter: string): any[] {
    const uniqueArray: any[] = [];
    const seen = new Set();

    for (const item of array) {
      const key = item[propertyToFilter];

      if (!seen.has(key)) {
        seen.add(key);
        uniqueArray.push(item);
      }
    }

    return uniqueArray;
  }

}
