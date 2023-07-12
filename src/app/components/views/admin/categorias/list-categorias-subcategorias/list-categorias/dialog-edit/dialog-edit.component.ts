import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { CartService } from 'src/app/components/services/cart.service';

@Component({
  selector: 'app-dialog-edit',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent {
  @Output() public close = new EventEmitter();

  public toogleModal = false;

  constructor(private cartService: CartService) {}

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.close.emit();
  }
}
