import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  dataLogin = [];


  constructor(private userService) {}

  loginSubmit(event: Event) {
    event.preventDefault();
    console.log(this.dataLogin);
  }

}
