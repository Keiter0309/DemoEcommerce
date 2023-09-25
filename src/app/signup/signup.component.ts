import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor() {

  }

  ngOnInit():void {
    initFlowbite()
  }
}
