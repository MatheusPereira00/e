import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
export class DialogComponent implements OnInit {
  @Input() public image = '';
  @Output() public close = new EventEmitter();
  
  public toogleModal = false;
  currentProduct!: Product

  public ngOnInit(): void {
    console.log(this.image);
  }

  constructor(private cartService: CartService) {}

  public openDialog(): void {
    this.toogleModal = true;
  }

  public fecharModal(): void {
    //this.dialogComponent.dismissAll();
    this.close.emit();
  }

  
  public confirmar(): void {
    console.log(this.currentProduct)
    this.cartService.addToCart(this.currentProduct);
    
    this.toogleModal = false;
    this.close.emit();
  }
}
