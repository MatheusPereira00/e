import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../models/product-interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  public products: Product[]= [];

  public allProductCart = this.cartService.getItems();

  constructor(public cartService: CartService) {
    // localStorage.setItem('BD', JSON.stringify(this.products));
  }

  ngOnInit(): void {
    //this.cartService.getItems();
    //console.log(this.allProductCart)
  }
  

}

