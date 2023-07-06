import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private BaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.PRODUCT_API}/products/`);
  }
  // `${this.BaseUrl}/products`
  public getProductId(productId: string) {
    // return this.http.get<Product>(`${environment.PRODUCT_API}/products/${productId}`)
  }
}
