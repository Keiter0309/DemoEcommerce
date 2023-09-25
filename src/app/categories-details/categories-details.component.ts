import {Component, OnInit} from '@angular/core';
import {FakeShopService} from "../fake-shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit{
  allProducts: any[] = [];
  category: string | null = '';
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  uniqueCategories: string[] = [];
  p:number = 1;
  constructor(private route:ActivatedRoute, private fakeShopService: FakeShopService) {
    for(let i=0; i<=8; i++) {
      this.products.push(`product ${i}`);
    }
  }

  ngOnInit(): void {
    this.fakeShopService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.allProducts = data;
      this.getUniqueCategories();
      this.route.paramMap.subscribe((params) => {
        this.category = params.get('category');
        this.fakeShopService.getProducts().subscribe((data) => {
          // Lọc sản phẩm theo chuyên mục
          this.products = data.filter(
            (product) => product.category.name === this.category
          );
        });
      });
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
  }
  performSearch() {
    if (this.searchQuery || this.selectedCategory !== 'All') {
      this.filteredProducts = this.allProducts.filter((product) => {
        const matchCategory = this.selectedCategory === 'All' || product.category.name === this.selectedCategory;
        const matchKeyword = !this.searchQuery || product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchCategory && matchKeyword;
      });
    } else {
      this.filteredProducts = this.allProducts;
    }
  }
}
