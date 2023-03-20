import { Component, Input } from '@angular/core';
import { product } from 'src/app/components/models/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public product: product[] = [];
}
