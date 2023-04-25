import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  public allProductCart = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getItems();
    console.log(this.allProductCart)
  }

}
