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
import { SharedModule  } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
   
    AddProperityComponent,
         HeaderComponent,
         CommentsComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    AuthModule,
    UsersModule,
    SharedModule,
    MaterialModule,
    AdminModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
