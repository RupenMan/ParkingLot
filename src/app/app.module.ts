import {MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ParkingLotService } from './parkig-lot-form/parking-lot.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ParkigLotFormComponent } from './parkig-lot-form/parkig-lot-form.component';
import { UpdateParkingLotComponent } from './parking-lot-update/update-parking-lot/update-parking-lot.component';
import { ReceiptComponent } from './parking-lot-receipt/receipt.component';
import { CustomersComponent } from './customer/customers.component';
import { CustomerInfoComponent } from './customer/customer-info/customer-info.component';


const API_ROOT = [
  {
    path:'', redirectTo:"/submit", pathMatch:"full"
  },
  {
  path: "submit", component: ParkigLotFormComponent
}, {
  path: "update", component: UpdateParkingLotComponent
},{
  path: "receipt", component: ReceiptComponent
},{
  path: "customers", component: CustomersComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    ParkigLotFormComponent,
    UpdateParkingLotComponent,
    ReceiptComponent,
    CustomersComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(API_ROOT)
  ],
  providers: [ParkingLotService],
  bootstrap: [AppComponent],
  entryComponents: [UpdateParkingLotComponent]
})
export class AppModule { }
