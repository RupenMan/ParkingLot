import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ParkingLotService } from './../parkig-lot-form/parking-lot.service';
import { Component, OnInit} from '@angular/core';
import { ParkingLot } from '../parkig-lot-form/parking-lot';
import { UpdateParkingLotComponent } from '../parking-lot-update/update-parking-lot/update-parking-lot.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: ParkingLot[];
  customer_id: String;


  constructor(private parkingLotService: ParkingLotService, private router: Router,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.parkingLotService.getAllCustomer()
      .subscribe(data => {
        this.customers = data as ParkingLot[];
        console.log(this.customers);
      });
  }

  onDelete(customer_id: String):ParkingLot[] {
    this.customers = this.customers
      .filter(customer => customer.customer_id != customer_id);
      return this.customers;
  }

  onUpdate(customer_info:ParkingLot){
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    dialogConfig.position={
      'top':'50px',
      'left':'350px'
    };
    dialogConfig.width='750px';
    dialogConfig.height='300px';
    dialogConfig.data=customer_info;
    this.dialog.open(UpdateParkingLotComponent,dialogConfig);
  }

}
