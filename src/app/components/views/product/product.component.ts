import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/product.service';
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

  constructor(private serviveService: ServiceService, private cartService: CartService) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.serviveService.getProduct().subscribe(data => {
      this.product = data;
    });
  }

  public addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log(product)
  }

  
}
