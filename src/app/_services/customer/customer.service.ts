import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,throwError,BehaviorSubject } from 'rxjs';
import { catchError,retry } from 'rxjs/operators' ;
import { ApiResponse } from '../../_models/api-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _HttpClient : HttpClient) { }

  getCustomers(): Observable<any> {
    let url = environment.baseWebApiUrl + "/Customer/GetCustomers";
    let req = this._HttpClient.get(
          url,
          {
            headers : new HttpHeaders({
                'Content-Type' : 'application/Json'
            }) 
          }
        ).pipe(
          retry(1), catchError(error => {
            return throwError(error.message || 'Server Error');
          })
        )
    return req;
  }

  // createCustomer(customerObj:any)
  // {
  //   return this._HttpClient.post<ApiResponse>(environment.baseWebApiUrl + '/Customer/CreateCustomer', JSON.stringify(customerObj))
  //                         .pipe(
  //                          map((response: ApiResponse) => 
  //                          {
  //                             return response;
  //                          }
  //                         ));
  // }

  createCustomer(customerObj:any): Observable<any>
  {
    let url = environment.baseWebApiUrl + "/Customer/CreateCustomer";
    let req = this._HttpClient.post(
          url,
          customerObj,
          {
            headers : new HttpHeaders({
                'Content-Type' : 'application/Json'
            }) 
          }
        ).pipe(
          retry(1), catchError(error => {
            return throwError(error.message || 'Server Error');
          })
        )
    return req;
  }
}
