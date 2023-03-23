import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../models/product-interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product: Product[] = [];
  //INSERIR METODO GET

  constructor(private serviveService: ServiceService) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.serviveService.getProduct().subscribe(data => {
      this.product = data;
    });
  }
}
