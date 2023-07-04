import { Injectable } from '@angular/core';
import { Product } from '../models/product-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  constructor(private http: HttpClient) { }

  public getSubCategorys(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.PRODUCT_API}/subcategorys`);
  }
}
