import { ReceiptBody } from './../parking-lot-receipt/receipt-body';
import { ParkingLot } from './parking-lot';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceiptComponent } from '../parking-lot-receipt/receipt.component';
import { Receipt } from '../parking-lot-receipt/receipt';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  // apiURL: string = "http://192.168.0.25:8091/";
  apiURL: string = "http://localhost:8090/"

  data: string;

  customers: ParkingLot[] = [];

  @Input("receipt_body") receipt_body: Receipt;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  public sendCustomerInfo(parkingLot: ParkingLot) {
    this.http.post(this.apiURL + "entry_information", parkingLot)
      .subscribe(data => this.data = data.toString());
    return this.data;
  }

  public updateCustomerInfo(parkingLot: ParkingLot) {
    this.http.put(this.apiURL + "update_exit_time", parkingLot)
      .subscribe(data => {
        this.receipt_body = data as Receipt;
        this.router.navigate(['/receipt'], { state: this.receipt_body });
      });
  }

  public getAllCustomer() {
    return this.http.get(this.apiURL + "customers");
  }
}
