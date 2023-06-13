import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        CheckoutComponent
    ]
})
export class CheckoutModule { }
