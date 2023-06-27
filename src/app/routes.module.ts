import { Routes } from '@angular/router';
import { ProductComponent } from './components/views/product/product.component';
import { CartComponent } from './components/views/cart/cart.component';
import { CheckoutComponent } from './components/views/checkout/checkout.component';
import { CreateAccountComponent } from './components/views/account/create-account/create-account.component';
import { LoginComponent } from './components/views/account/login/login.component';
import { AdmComponent } from './components/views/admin/adm/adm.component';
import { ListCategoriasSubcategoriasComponent } from './components/views/admin/categorias/list-categorias-subcategorias/list-categorias-subcategorias.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

 export const productsRoutes: Routes = [
  {
    path: '', component: ProductComponent
  },
  {
    path: 'login', component: LoginComponent
  }
 ]

 export const cartRoutes: Routes = [
  {
    path: 'cart', component: CartComponent
  }
 ]

 export const checkoutRoutes: Routes = [
  {
    path: 'checkout', component: CheckoutComponent
  }
 ]

 export const accountRoutes: Routes = [
   {
     path: 'login', component: LoginComponent,
   },
   {
     path: 'create', component: CreateAccountComponent
   },
]

export const adminRoutes: Routes = [
  {
    path: 'adm', component: AdmComponent,
  },
  {
    path: 'categorias', component: ListCategoriasSubcategoriasComponent
  }
]

