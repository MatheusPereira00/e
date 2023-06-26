import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./routes.module').then(m => m.productsRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./routes.module').then(m => m.cartRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./routes.module').then(m => m.checkoutRoutes)
  },
   {
    path: '',
    loadChildren: () =>
      import('./routes.module').then(m => m.accountRoutes)
  },
  {
    path: '',
    loadChildren: () =>
      import('./routes.module').then(m => m.adminRoutes)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
