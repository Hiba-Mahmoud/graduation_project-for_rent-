import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './component/owner/owner.component';
import { RenterComponent } from './component/renter/renter.component';



@NgModule({
  declarations: [
    OwnerComponent,
    RenterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule

  ],
  exports:[
    OwnerComponent
  ]
})
export class UsersModule { }
