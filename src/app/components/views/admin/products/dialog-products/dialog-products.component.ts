import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/components/services/product.service';
import { take } from 'rxjs';
import { Product } from 'src/app/components/models/product-interface';

@Component({
  selector: 'app-dialog-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-products.component.html',
  styleUrls: ['./dialog-products.component.scss'],
})
export class DialogProductsComponent implements OnInit {
  public products: Product[] = [];
  @Output() public Close = new EventEmitter();
  public toogleModal = false;

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public getProduct(): void {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  public openDialog(): void {
    this.toogleModal = true;
  }

  public closeModal(): void {
    this.Close.emit();
    this.toogleModal = false;
  }

  public deleteProducts(id: number): void {
    this.productService.deleteProducts(id).pipe(take(1)).subscribe();
    this.getProduct();
  }
}
