import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  public postProducts(newProducts: { name: string }): Observable<Product> {
    return this.http.post<Product>(this.productUrl, newProducts);
  }

  public updateProducts(id: number, newProducts: { name: string }): Observable<Product> {
    let url = this.productUrl;
    url += `/${id}`;
    return this.http.patch<Product>(url, newProducts);
  }
}
