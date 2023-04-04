import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private BaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BaseUrl}/products`);
  }
}
