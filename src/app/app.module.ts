import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { ServiceService } from './components/service/service.service';
import { ProductModule } from './components/views/product/product.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [BrowserModule, AppRoutingModule, ProductModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
