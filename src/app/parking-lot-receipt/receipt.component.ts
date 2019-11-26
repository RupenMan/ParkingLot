import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Receipt } from './receipt';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  receipt:Receipt;
  constructor(private router:Router) { 
    this.receipt = this.router.getCurrentNavigation().extras.state as Receipt;
  }

  ngOnInit() {
    
  }

}
