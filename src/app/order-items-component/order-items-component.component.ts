import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-order-items-component',
  templateUrl: './order-items-component.component.html',
  styleUrls: ['./order-items-component.component.scss']
})
export class OrderItemsComponentComponent implements OnInit {

  items = [{
    "name":"iGRiD Magic sports IG-8202 Bluetooth Headset with Mic  (Green, Black, In the Ear)",
    "price":2799,
    "qty":2
  },{
    "name":"boAt Rockerz 255F Bluetooth Headset with Mic  (Active Black, In the Ear)",
    "price":1099,
    "qty":1
  }]

  constructor(private _commonServices: CommonServiceService) { }

  ngOnInit() {
    setTimeout(() => {
      //Publishing Initial List
      this.publishChanges();
    }, 10);
  }

  publishChanges() {
    this._commonServices.orderUpdated(this.items);
  }

}
