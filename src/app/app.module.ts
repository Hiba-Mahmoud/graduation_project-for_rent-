import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { PropertyComponent } from './userActions/component/property/property.component';
import { FavouriteComponent } from './userActions/component/favourite/favourite.component';
import { CreditCardComponent } from './userActions/component/credit-card/credit-card.component';
import { AddCreditCardComponent } from './userActions/component/add-credit-card/add-credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    PropertyComponent,
    FavouriteComponent,
    CreditCardComponent,
    AddCreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
