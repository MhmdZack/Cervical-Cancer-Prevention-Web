import { CustomerService } from './../../_services/customer/customer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit {
customers:any = [];
errorMessage:any;
  constructor(private _customerService:CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomers().subscribe(data => 
      {
       this.customers = data.data;
      },
      error => this.errorMessage = error
      )
  }

  sortFunction(a:any, b:any) {
    return a.CustomerId - b.CustomerId;
  }
   
}
