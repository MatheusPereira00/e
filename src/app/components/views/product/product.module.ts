import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CardComponent } from './card/card.component';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductComponent } from './product.component';
//import { CartModule } from '../cart/cart.module';
import { CartComponent } from '../cart/cart.component';
//import { CartComponent } from '../cart/cart.component';


@NgModule({
    imports: [CommonModule, ProductRoutingModule, HttpClientModule, ProductComponent, CardComponent, DialogComponent, PaginationComponent, CartComponent],
    exports: [ProductComponent, CardComponent, DialogComponent],
    providers: [ProductService],
})
export class ProductModule {}
