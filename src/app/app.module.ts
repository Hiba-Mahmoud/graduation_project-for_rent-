import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { PropertyComponent } from './userActions/component/property/property.component';
import { FavouriteComponent } from './userActions/component/favourite/favourite.component';
import { CreditCardComponent } from './userActions/component/credit-card/credit-card.component';
import { AddCreditCardComponent } from './userActions/component/add-credit-card/add-credit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    PropertyComponent,
    FavouriteComponent,
    CreditCardComponent,
    AddCreditCardComponent,
    HomeComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    SharedModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
