import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/components/services/product.service';

import { RouterLink } from '@angular/router';
import { Product } from 'src/app/components/models/product-interface';
import { DialogProductsComponent } from '../dialog-products/dialog-products.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  imports: [CommonModule, RouterLink, DialogProductsComponent],
})
export class ListProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsServie: ProductService) {}

  @ViewChild(DialogProductsComponent)
  public dialogEditComponent!: DialogProductsComponent;

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.productsServie.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  public openModal(): void {
    this.dialogEditComponent.toogleModal = true;
  }

  public close(): void {
    this.dialogEditComponent.toogleModal = false;
  }
}
