import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RemmberMeComponent } from './component/remmber-me/remmber-me.component';
import { MailConfirmComponent } from './component/mail-confirm/mail-confirm.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RemmberMeComponent,
    MailConfirmComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    MailConfirmComponent,
    

  ]
})
export class AuthModule { }
