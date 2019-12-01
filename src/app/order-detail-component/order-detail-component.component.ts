import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-order-detail-component',
  templateUrl: './order-detail-component.component.html',
  styleUrls: ['./order-detail-component.component.scss']
})
export class OrderDetailComponentComponent implements OnInit {

  items;
  cartTotal;

  constructor(private _commonServices: CommonServiceService) { }

  ngOnInit() {
    this._commonServices.orderUpdateObservable$
    .subscribe(
      items => {
        this.items = items;
        let total=0;
        this.items.forEach(element => {
          total += (element.price * element.qty);
        });
        this.cartTotal = total;
      }
    )
  }

}
