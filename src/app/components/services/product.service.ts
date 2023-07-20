import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productryUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productryUrl);
  }
}
