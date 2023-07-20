import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/components/services/product.service';

import { RouterLink } from '@angular/router';
import { Product } from 'src/app/components/models/product-interface';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsServie: ProductService) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.productsServie.getProduct().subscribe(data => {
      this.products = data;
    });
  }
}
