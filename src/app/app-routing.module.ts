import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'prefix',
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./components/views/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/views/cart/cart.module').then(m => m.CartModule),
  },
  // {
  //   path: 'Books',
  //   loadChildren: () => import('../assets/images/products/books').then(m => m.productModule),
  // },
  {
    path: 'checkout',
    loadChildren: () =>
    import('./components/views/checkout/checkout.module').then (m => m.CheckoutModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
