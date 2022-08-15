import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MailConfirmComponent } from './component/mail-confirm/mail-confirm.component';
import { MaterialModule } from '../material/material.module';


import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MailwithcodeComponent } from './component/mailwithcode/mailwithcode.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,

    MailConfirmComponent,
    ForgetPasswordComponent,
    MailwithcodeComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    MailConfirmComponent,
    ForgetPasswordComponent


  ]
})
export class AuthModule { }
