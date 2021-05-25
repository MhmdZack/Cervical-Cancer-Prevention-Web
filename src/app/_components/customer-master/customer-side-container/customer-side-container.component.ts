import { Component, OnInit,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-side-container',
  templateUrl: './customer-side-container.component.html',
  styleUrls: ['./customer-side-container.component.css']
})
export class CustomerSideContainerComponent implements OnInit {
  @Input() CustomerList:any = [];
  Customers:any = [];
  
  constructor() { }

  ngOnInit(): void {
    this.Customers = this.CustomerList;
   console.log(this.Customers);
  }

}
