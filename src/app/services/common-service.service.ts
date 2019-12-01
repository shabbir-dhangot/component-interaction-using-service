import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private orderUpdate = new Subject<{}>();
  orderUpdateObservable$ = this.orderUpdate.asObservable(); 

  constructor() { }

  orderUpdated(items){
    this.orderUpdate.next(items)
  }
}
