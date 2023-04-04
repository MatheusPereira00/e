import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product.component';
import { ServiceService } from '../../service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@NgModule({
  declarations: [ProductComponent, CardComponent, DialogComponent],
  imports: [CommonModule, ProductRoutingModule, HttpClientModule],
  exports: [ProductComponent, CardComponent, DialogComponent],
  providers: [ServiceService],
})
export class ProductModule {}
