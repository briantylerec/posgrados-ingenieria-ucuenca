import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    console.log(event)
  }

  onSubmit(){

  }

}
