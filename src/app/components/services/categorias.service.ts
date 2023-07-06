import { Injectable } from '@angular/core';
import { Product } from '../models/product-interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
   private BaseUrl = 'http://localhost:3000/categorys';

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BaseUrl}`);
  }
}
