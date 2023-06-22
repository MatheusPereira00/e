import { Routes } from '@angular/router';
import { ProductComponent } from './components/views/product/product.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { AuthenticationComponent } from './components/shared/authentication/authentication.component';
import { CreateAccountComponent } from './components/views/account/create-account/create-account.component';
import { LoginComponent } from './components/views/account/login/login.component';

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

 export const authenticationRoutes: Routes = [
  {
    path: '', component: AuthenticationComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'create', component: CreateAccountComponent
  },
]