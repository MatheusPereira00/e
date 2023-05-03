import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product-interface';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product: Product[] = [];

  //INSERIR METODO GET

  constructor(private productService: ProductService, private cartService: CartService) {}

  public ngOnInit() {
    this.getProduct();
  }

  public getProduct() {
    this.productService.getProduct().subscribe(data => {
      this.product = data;
    });
  }

  public addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log(product)
  }

  
}
