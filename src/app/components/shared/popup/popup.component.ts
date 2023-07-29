import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  public tooglePopup = true;

  public OpenPopup(): void {
    this.tooglePopup = true;
  }

  public closePopup(): void {
    this.tooglePopup = false;
  }
}
