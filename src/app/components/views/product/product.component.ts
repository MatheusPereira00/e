import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public product: Product[] = [];
  //INSERIR METODO GET

  constructor(private serviveService: ServiceService){}

  public getProduct(): void {
    this.serviveService.getProduct().subscribe(this.product => {
      this.product = this.product;
    })
  }
}
