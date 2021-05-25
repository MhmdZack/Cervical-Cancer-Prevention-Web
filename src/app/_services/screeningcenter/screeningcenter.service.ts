import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,throwError,BehaviorSubject } from 'rxjs';
import { catchError,retry } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class ScreeningcenterService {

  constructor(private _HttpClient : HttpClient) { }

  getscreeningcenter(): Observable<any> {
    let url = environment.baseWebApiUrl + "/v1/ScreeningCenter/GetScreenCenters";
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
}
