import {Component, OnInit, AfterViewInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import * as TE from 'tw-elements';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit{
  emailInput: string = '';
  emailInputRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  emailInputError: string = '';
  username:string = '';
  usernameRegex = /^[a-zA-Z]{5,}$/
  usernameError:string = '';
  password: string = '';
  passwordError:string = '';
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
  }
  ngAfterViewInit() {
    TE.initTE({ Input: TE.Input, Ripple: TE.Ripple });
  }

  ngOnInit():void {
    initFlowbite();
  }

  onSubmit () {
    if (this.emailInput.trim() === '') {
      this.emailInputError = "Please enter your email";
    } else if (!this.emailInputRegex.test(this.emailInput)) {
      this.emailInputError = "Your email isn't valid";
    } else {
      this.emailInputError = '';
    }

    if(this.password === '') {
      this.passwordError = "Please enter your password";
    }else if(!this.passwordRegex.test(this.password)) {
      this.passwordError = "Your password isn't valid"
    }else {
      this.passwordError = '';
    }

    if (this.emailInputError === '' && this.passwordError === '') {
      console.log('Form submitted successfully');
    }
  }
}
