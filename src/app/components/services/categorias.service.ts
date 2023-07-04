import { Injectable } from '@angular/core';
import { Product } from '../models/product-interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
  constructor(private http: HttpClient) { }

  public getCategorys(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.PRODUCT_API}/categorys`);
  }
}
