import { ParkingLot } from './../../parkig-lot-form/parking-lot';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  @Input("customer_info") customer_info : ParkingLot;

  @Output("updateCustomerInfo") updateCustomerInfo : EventEmitter<ParkingLot> = new EventEmitter();

  @Output("sendCustomerId") sendCustomerId:EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(customer_id:String){
    this.sendCustomerId.emit(customer_id);
  }

  onUpdate(customer_info:ParkingLot){
    this.updateCustomerInfo.emit(customer_info);
  }

}
