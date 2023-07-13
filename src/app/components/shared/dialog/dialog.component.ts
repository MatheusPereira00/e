import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product-interface';
import { NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class DialogComponent {
  @Input() public image = '';
  @Output() public Close = new EventEmitter();

  public toogleModal = false;
  public currentProduct!: Product;

  constructor(private cartService: CartService) {}

  public openDialog(): void {
    this.toogleModal = true;
  }

  public fecharModal(): void {
    this.Close.emit();
  }

  public confirmar(): void {
    console.log(this.currentProduct);
    this.cartService.addToCart(this.currentProduct);

    this.toogleModal = false;
    this.Close.emit();
  }
}
