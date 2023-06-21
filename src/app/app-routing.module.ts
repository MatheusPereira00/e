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
      import('./routes.module').then(m => m.productsRoutes),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./routes.module').then(m => m.cartRoutes),
  },
  {
    path: 'checkout',
    loadChildren: () =>
    import('./routes.module').then (m => m.checkoutRoutes)
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./routes.module').then (m => m.loginRoutes)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
