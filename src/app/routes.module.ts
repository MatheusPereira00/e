import { Routes } from '@angular/router';
import { ProductComponent } from './components/views/product/product.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { LoginComponent } from './components/views/login/login.component';


 export const productsRoutes: Routes = [
  {
    path: '', component: ProductComponent
  },
 ]

 export const cartRoutes: Routes = [
  {
    path: '', component: CartComponent
  }
 ]

 export const checkoutRoutes: Routes = [
  {
    path: '', component: CheckoutComponent
  }
 ]

 export const loginRoutes: Routes = [
  {
    path: '', component: LoginComponent
  }
 ]


 