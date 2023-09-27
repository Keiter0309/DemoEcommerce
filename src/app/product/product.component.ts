import {Component, OnInit} from '@angular/core';
import {FakeShopService} from "../fake-shop.service";
import {ActivatedRoute} from "@angular/router";
import { trigger, state, style, animate, transition } from '@angular/animations';
import {CartServiceService} from "../cart-service.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  uniqueCategories:string[] = [];
  searchResults: any[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  p:number = 1;
  searchQuery: string = '';
  selectedProducts: any[] = [];
  constructor(private route:ActivatedRoute, private fakeShopService: FakeShopService, private cartService: CartServiceService) {
    for(let i=0; i<=8; i++) {
      this.products.push(`product ${i}`);
    }
  }
  ngOnInit():void {
    this.products = []
    this.fakeShopService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.getUniqueCategories();
    });
    // this.route.params.subscribe(params => {
    //   const productId = +params['id'];
    //
    //   this.fakeShopService.getProducts(productId).subscribe(data => {
    //     this.products = data;
    //   });
    // });

  }
  performSearch() {
    this.p = 1;
    if (!this.searchQuery.trim()) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  getUniqueCategories() {
    this.uniqueCategories = [...new Set(this.products.map((product) => product.category.name))];
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!')
  }
}
