import { ScreeningcenterService } from './../../_services/screeningcenter/screeningcenter.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-screeningcenter',
  templateUrl: './screeningcenter.component.html',
  styleUrls: ['./screeningcenter.component.css']
})
export class ScreeningcenterComponent implements OnInit {
  ScreeningCenters:any;
  errorMessage:any;
  constructor(
    private _screeningcenterService:ScreeningcenterService
  ) { }
  ngOnInit(): void {
    this._screeningcenterService.getscreeningcenter().subscribe(data => 
      {
        debugger;
        this.ScreeningCenters = data.data;
      },
      error => this.errorMessage = error
      )
  }
  

}
