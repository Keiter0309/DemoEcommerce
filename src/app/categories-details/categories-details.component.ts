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
    const searchQuery = this.searchQuery.trim().toLowerCase(); // Normalize search query

    if (searchQuery === '' && !this.selectedCategory) {
      // If both search query and category are empty, show all products
      this.filteredProducts = this.products;
    } else {
      // Filter products based on search query and/or selected category
      this.filteredProducts = this.products.filter((product) => {
        const matchesSearchQuery = !searchQuery || product.title.toLowerCase().includes(searchQuery);
        const matchesCategory = !this.selectedCategory || product.category.name.toLowerCase() === this.selectedCategory.toLowerCase();

        return matchesSearchQuery && matchesCategory;
      });
    }
  }

}
