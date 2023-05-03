import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Product } from 'src/app/components/models/product-interface';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
import { CartService } from 'src/app/components/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public products: Product[]= [];
  @Output() public productTeste = new EventEmitter();

  public image = '';

  constructor(private cartService: CartService) {}

  @ViewChild(DialogComponent)
  public dialogComponent!: DialogComponent;

  public eventClick(product: Product): void {

    this.productTeste.emit(product);
    //localStorage.setItem('Db', JSON.stringify(this.products));
    // window.alert('Your product has been added to the cart!');
  }

  // eventClick(){
  //   this.cartService.addToCart(this.product);
  // }

  public changeStateModal(image: string, product: Product): void {
    this.image = image;
    this.dialogComponent.currentProduct = product;
    this.dialogComponent.toogleModal = true;
  }

  public close(): void {
    this.dialogComponent.toogleModal = false;
  }
}
