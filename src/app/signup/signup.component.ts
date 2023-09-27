import {Component, OnInit, AfterViewInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import * as TE from 'tw-elements';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit{
  // emailInput: string = '';
  // emailInputRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  // emailInputError: string = '';
  // username:string = '';
  // usernameRegex = /^[a-zA-Z]{5,}$/
  // usernameError:string = '';
  // password: string = '';
  // passwordError:string = '';
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  // submitted = false;
  myGroup:any;
  passwordErrorMessage:string = '';
  matchPassErrorMessage: string = '';
  constructor(private formBuilder: FormBuilder) {
  }
  ngAfterViewInit() {
    TE.initTE({ Input: TE.Input, Ripple: TE.Ripple });
  }
  ngOnInit():void {
    initFlowbite();
    this.myGroup = new FormGroup({
      "emailInput": new FormControl(null, [Validators.required,Validators.pattern(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)]),
      "usernameInput": new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z]{5,}$/)]),
      "passwordInput": new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      "matchPass": new FormControl(null, [Validators.required]),
      "phoneInput": new FormControl(null, [Validators.required, Validators.pattern(/^\d{9}$/)])
    })
  }
  onSubmit () {
    const passwordValue = this.myGroup.get('passwordInput').value;
    const matchPassValue = this.myGroup.get('matchPass').value;

    if (!this.passwordRegex.test(passwordValue)) {
      this.passwordErrorMessage = 'Password must meet the specified pattern.';
    } else {
      this.passwordErrorMessage = '';
    }

    if (!this.passwordRegex.test(matchPassValue)) {
      this.matchPassErrorMessage = 'Password must meet the specified pattern.';
    } else if (passwordValue !== matchPassValue) {
      this.matchPassErrorMessage = 'Passwords do not match.';
      console.log(this.matchPassErrorMessage);
      alert(this.matchPassErrorMessage);
    } else {
      this.matchPassErrorMessage = '';
    }

    if (this.myGroup.valid && (this.matchPassErrorMessage === '')) {
      console.log(this.myGroup.value);
      alert(`Thank you ${this.myGroup.value.usernameInput}`);
      this.myGroup.reset();
    }
  }

  get emailInput() {
    return this.myGroup.get('emailInput');
  }

  get usernameInput() {
    return this.myGroup.get('usernameInput');
  }

  get passwordInput() {
    return this.myGroup.get('passwordInput');
  }

  get matchPass() {
    return this.myGroup.get('matchPass');
  }

  get phoneInput() {
    return this.myGroup.get('phoneInput');
  }
}
