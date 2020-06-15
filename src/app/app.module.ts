import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './componenets/auth/auth.component';
import { ItemComponent } from './componenets/item/item.component';
import { CartComponent } from './componenets/cart/cart.component';
import { CheckoutComponent } from './componenets/checkout/checkout.component';
import { StoreComponent } from './componenets/store/store.component';
import { ShoppingCartComponent } from './componenets/shopping-cart/shopping-cart.component';
import { ReviewComponent } from './componenets/review/review.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ItemComponent,
    CartComponent,
    CheckoutComponent,
    StoreComponent,
    ShoppingCartComponent,
    ReviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
