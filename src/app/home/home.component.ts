import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {initFlowbite} from "flowbite";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }

  constructor(private router: Router) {
  }
}
