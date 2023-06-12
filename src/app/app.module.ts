import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { ProductModule } from './components/views/product/product.module';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ControlContainerComponent } from './components/views/control-container/control-container.component';
import { SearchComponent } from './components/shared/search/search.component';
//import { CartModule } from './components/views/cart/cart.module';
//import { CartComponent } from './components/views/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoadingComponent,
    SearchComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
