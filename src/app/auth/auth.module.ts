import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RemmberMeComponent } from './component/remmber-me/remmber-me.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RemmberMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
