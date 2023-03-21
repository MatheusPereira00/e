import { Component, Input } from '@angular/core';
import { Product } from 'src/app/components/models/product-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public product: Product[] = [];
}
