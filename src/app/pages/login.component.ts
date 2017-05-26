import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../my-application/services/user.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  public emailInput: string = '';
  public passwordInput: string = '';
  public error: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    if (this.emailInput !== '' && this.passwordInput !== '') {
      this.userService.logIn(this.emailInput, this.passwordInput)
        .subscribe((res) => {
            const headersResponse = res.headers;
            this.userService.setCookies(headersResponse);
            this.router.navigate(['/main']);
          },
          (error) => {
            this.error = error.json().errors;
          });
    }
  }
}
