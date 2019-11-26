import { ParkingLotService } from './../../parkig-lot-form/parking-lot.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ParkingLot } from '../../parkig-lot-form/parking-lot';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-update-parking-lot',
  templateUrl: './update-parking-lot.component.html',
  styleUrls: ['./update-parking-lot.component.css']
})
export class UpdateParkingLotComponent implements OnInit {

  parkingLot: ParkingLot;
  updateFormGroup: FormGroup;

  onSubmit() {
    this.parkingLot = this.updateFormGroup.value;
    this.parkingService.updateCustomerInfo(this.parkingLot);
  }
  
  ngOnInit() {
    this.updateFormGroup = this.formBuilder.group({
      customer_id: ['', [Validators.required, Validators.minLength(2)]],
      duration:this.formBuilder.group({
        exit_time : ['']
      })
    });
  }

  get f(){
    return this.updateFormGroup.controls;
  }

  constructor(private parkingService: ParkingLotService,  private formBuilder: FormBuilder,
    private router:Router,  @Inject(MAT_DIALOG_DATA)data:any) { 
      this.parkingLot= data;
      // this.parkingLot=this.router.getCurrentNavigation().extras.state as ParkingLot;
  }
}
