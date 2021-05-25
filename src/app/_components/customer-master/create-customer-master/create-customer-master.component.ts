import { CustomerService } from './../../../_services/customer/customer.service';
import { Component, OnInit,Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { ToastService } from 'src/app/_services/toast/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-customer-master',
  templateUrl: './create-customer-master.component.html',
  styleUrls: ['./create-customer-master.component.css']
})
export class CreateCustomerMasterComponent implements OnInit {
  isAuthenticated: boolean = false;
  isAuth: boolean = false;
  form!: FormGroup;
  submitted = false;
  errorMessage:any;
  constructor(
    private formBuilder: FormBuilder, 
    private injector: Injector, 
    private _customerService: CustomerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        CustomerCode: ['', Validators.required],
        CustomerName: ['', Validators.required],
        IsActive: ['']
      }
    );
  }

  get formControls()
  {
    return this.form.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let CustmerObj =
    {
      "CustomerCode":this.formControls.CustomerCode.value,
      "CustomerName":this.formControls.CustomerName.value,
      "CreatedBy":10,
      "IsActive":this.formControls.IsActive.value?1:0
    }

    // this._customerService.createCustomer(CustmerObj).subscribe(a =>
    //   { 
    //     debugger;
    //       var data = a
    //   },
    //   error => this.errorMessage = error
    // )
    
    this._customerService.createCustomer(CustmerObj)
                              .pipe(first())
                              .subscribe({
                                next: () => {
                                  this.form.reset()
                                  this.router.navigate(['/customermaster']);
                                  this.injector.get(ToastService).success('Customer created Successful!');
                                },
                               error: err => {
                                  if (err instanceof HttpErrorResponse) {
                                    if (err.status === 422) {

                                      Object.keys(err.error.Errors).forEach((prop: any) => {
                                        const formControl = this.form.get(err.error.Errors[prop].PropertyName.toLowerCase());

                                        if (formControl) {
                                          // activate the error message
                                          formControl.setErrors({
                                            serverError: err.error.Errors[prop].ErrorMessage
                                          });
                                        }
                                      });
                                      this.injector.get(ToastService).danger('Customer created Failed');
                                    }
                                  }

                              }
                              });
   }

}
