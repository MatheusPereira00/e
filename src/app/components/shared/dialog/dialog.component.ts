import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../models/product-interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    standalone: true,
    imports: [NgIf],
})
export class DialogComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Input() public image = '';
  @Output() public close = new EventEmitter();

  // mensagemAdicionado: string = '';
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
