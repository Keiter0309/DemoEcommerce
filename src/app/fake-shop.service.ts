import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeShopService {

 private apiUrl = "https://api.escuelajs.co/api/v1/products";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
  }

  getProduct(productId: number): Observable<any> {
    const productUrl = `${this.apiUrl}/${productId}`;
    return this.http.get<any>(productUrl);
  }
}
