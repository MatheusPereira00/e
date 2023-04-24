import { Injectable } from '@angular/core';
import { Product } from '../models/product-interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productCarts: Product[] = [];

  constructor() {}

  public addToCart(product: Product) {
    this.productCarts.push(product);
  }

  public getItems() {
    return this.productCarts;
  }

  
  public clearCart() {
    this.productCarts = [];
    return this.productCarts;
  }
}
