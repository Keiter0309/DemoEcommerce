import {Injectable, OnInit} from '@angular/core';
import {ProductComponent} from "./product/product.component";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService implements OnInit{
  items: ProductComponent[] = [];

  addToCart(product:ProductComponent) {
    this.items.push((product));
  }

  ngOnInit() {
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
