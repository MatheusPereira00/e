import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CreateAccountComponent } from './components/views/account/create-account/create-account.component';
import { AuthenticationComponent } from './components/shared/authentication/authentication.component';
import { authGuard } from './components/shared/auth-guard/auth.guard';

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
      import('./routes.module').then(m => m.checkoutRoutes)
  },
  
  {
    path: 'account',
    loadChildren: () =>
      import('./routes.module').then(m => m.authenticationRoutes)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
