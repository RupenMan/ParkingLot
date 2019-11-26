import { ParkingLotService } from './parking-lot.service';
import { ParkingLot } from './parking-lot';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-parkig-lot-form',
  templateUrl: './parkig-lot-form.component.html',
  styleUrls: ['./parkig-lot-form.component.css']
})
export class ParkigLotFormComponent implements OnInit {
  parkingLot: ParkingLot;
  parkinglotForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private parkinglotService: ParkingLotService){

  }
  ngOnInit(){
    this.parkinglotForm = this.formBuilder.group({
      customer_id : ['', [Validators.required, Validators.minLength(2)]],
      pass_type: [''],
      size_of_vehicle: [''],
    duration:this.formBuilder.group({
      entry_time: ['', Validators.required]
    })
    })
  }
  
  get f(){return this.parkinglotForm.controls;}
  
   onSubmit(){
    
    this.parkingLot = this.parkinglotForm.value;  
    this.parkinglotService.sendCustomerInfo(this.parkingLot);
   
   
  }

}
