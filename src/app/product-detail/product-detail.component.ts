import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeShopService } from '../fake-shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private fakeShopService: FakeShopService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];

      // Use this.productId to fetch the specific product details
      this.fakeShopService.getProduct(productId).subscribe(data => {
        this.product = data;
      });
    });
  }
}


