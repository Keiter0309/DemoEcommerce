import {Component, OnInit, AfterViewInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import * as TE from 'tw-elements';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit{
  email: string = '';
  emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  emailError: string = '';
  password: string = '';
  passwordError:string = '';
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  constructor() {}
  ngOnInit() {
    initFlowbite();
  }

  ngAfterViewInit() {
    TE.initTE({ Input: TE.Input, Ripple: TE.Ripple });
  }

  validateForm() {
    if (this.email.trim() === '') {
      this.emailError = "Please enter your email";
    } else if (!this.emailRegex.test(this.email)) {
      this.emailError = "Your email isn't valid";
    } else {
      this.emailError = '';
    }

    if(this.password === '') {
      this.passwordError = "Please enter your password";
    }else if(!this.passwordRegex.test(this.password)) {
      this.passwordError = "Your password isn't valid"
    }else {
      this.passwordError = '';
    }

    if (this.emailError === '' && this.passwordError === '') {
      console.log('Form submitted successfully');
    }
  }
}
