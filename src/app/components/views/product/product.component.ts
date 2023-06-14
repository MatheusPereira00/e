import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product-interface';
import { CartService } from '../../service/cart.service';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CardComponent, DialogComponent, PaginationComponent],
  // exports: [ProductComponent, CardComponent, DialogComponent],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  public product: Product[] = [];

  //INSERIR METODO GET

  constructor(private productService: ProductService, private cartService: CartService) { }

  public ngOnInit() {
    console.log('carregou')
    this.getProduct();
  }

  public getProduct() {
    this.productService.getProduct().subscribe(data => {
      this.product = data;
    });
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(product)
  }

}
