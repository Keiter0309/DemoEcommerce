import {Component, OnInit} from '@angular/core';
import {CartServiceService} from "../cart-service.service";
import {FakeShopService} from "../fake-shop.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  cartItems: any[] = [];
  constructor(private cartService: CartServiceService, private fakeShopService: FakeShopService) {
  }
  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }
}
