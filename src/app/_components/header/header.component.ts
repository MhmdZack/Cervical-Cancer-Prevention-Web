import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  isAuth: boolean = localStorage.getItem('user') != null? false : true;
  constructor(
    private authenticationService: AuthenticationService
  ) {

    this.authenticationService.changeLoginState(this.checkToken());
    this.authenticationService.currentState.subscribe(loginState => {
      this.isAuth = loginState;
     });
    this.isAuthenticated = this.authenticationService.isAuthenticated();
    
  }

  ngOnInit(): void {
    this.authenticationService.changeLoginState(this.checkToken());
    this.authenticationService.currentState.subscribe(loginState => {
      this.isAuth = loginState;
     });
  }

  logout() {
    this.authenticationService.logout();
}

checkToken(): boolean {
  return localStorage.getItem('user') !== null;
}
}
