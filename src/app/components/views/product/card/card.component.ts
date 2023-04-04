import { Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/components/models/product-interface';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public products: Product[] = [];

  public image = '';

  @ViewChild(DialogComponent)
  public dialogComponent!: DialogComponent;

  public changeStateModal(image: string): void {
    this.image = image;
    this.dialogComponent.toogleModal = true;
  }

  public close(): void {
    this.dialogComponent.toogleModal = false;
  }
}
