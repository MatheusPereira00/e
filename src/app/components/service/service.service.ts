import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  private BaseUrl = 'http://localhost:3000';

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BaseUrl}/products`);
  }
}
