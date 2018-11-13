import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './pages/crypto/crypto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MarketItemComponent } from './components/market-item/market-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    NavbarComponent,
    SidebarComponent,
    MarketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
