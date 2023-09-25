import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FakeShopService } from '../fake-shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  uniqueCategories: string[] = [];
  p:number = 1;
  constructor(private route:ActivatedRoute,private router: Router, private fakeShopService: FakeShopService) {
    for(let i=0; i<=8; i++) {
      this.products.push(`product ${i}`);
    }
  }

  ngOnInit(): void {
    this.fakeShopService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.getUniqueCategories();
    });
  };
  getUniqueCategories() {
    this.uniqueCategories = [...new Set(this.products.map((product) => product.category.name))];
  }

  filterProductsByCategory(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) => product.category.name === category);
    }
    this.router.navigate(['/categories', category]);
  }
}

