import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProperityComponent } from './components/add-properity/add-properity.component';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MaterialModule } from './material/material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListAllOwnerProperitiesComponent } from './components/list-all-owner-properities/list-all-owner-properities.component';
import { UpdateProperityAdvertisingComponent } from './components/update-properity-advertising/update-properity-advertising.component';
import { SharedModule  } from './shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { AdminModule } from './admin/admin.module';
import { PendingComponent } from './components/pending/pending.component';
import { RentedComponent } from './components/rented/rented.component';
import { NotRentedYetComponent } from './components/not-rented-yet/not-rented-yet.component';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [

         AppComponent,
         AccountComponent,
         HomeComponent,
         AddProperityComponent,
         ListAllOwnerProperitiesComponent,
         UpdateProperityAdvertisingComponent,
         AboutComponent,
         PendingComponent,
         RentedComponent,
         NotRentedYetComponent,
         // ListcontactsComponent,

        HeaderComponent,
      CommentsComponent,
      PaymentmethodComponent,


  ],
  imports: [

    FontAwesomeModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,


    RouterModule,
    UsersModule,
    HttpClientModule,
    AuthModule,
    UsersModule,
    SharedModule,
    AdminModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
