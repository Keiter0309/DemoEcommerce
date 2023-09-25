import {Component, OnInit} from '@angular/core';
import {FakeShopService} from "../fake-shop.service";
import {ActivatedRoute} from "@angular/router";
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProductComponent implements OnInit{
  uniqueCategories:string[] = [];
  searchResults: any[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  p:number = 1;
  searchQuery: string = '';
  constructor(private route:ActivatedRoute, private fakeShopService: FakeShopService) {
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
    })
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

  scrollOffset = 300; // Điểm bắt đầu hiển thị sản phẩm

  isVisible(index: number): boolean {
    const scrollTop = window.scrollY;
    const elementOffset = index * this.scrollOffset; // Điểm bắt đầu hiển thị sản phẩm thứ i
    return scrollTop >= elementOffset;
  }
}
