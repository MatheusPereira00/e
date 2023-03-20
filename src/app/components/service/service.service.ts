import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  private API = 'http://localhost:3000/books';

  getProduct(): Observable<product[]> {
    return this.http.get<product[]>(this.API);
  }
}
