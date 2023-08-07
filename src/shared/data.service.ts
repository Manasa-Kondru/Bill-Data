import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private parentDataSubject = new BehaviorSubject<any[]>([]);
  parentData$ = this.parentDataSubject.asObservable();

  updateParentData(data: any[]) {
    this.parentDataSubject.next(data);
  }
}
