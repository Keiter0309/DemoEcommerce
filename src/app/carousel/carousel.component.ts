import { Component, OnInit } from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  ngOnInit() {
    initFlowbite();
  }
}
