import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './component/owner/owner.component';
import { RenterComponent } from './component/renter/renter.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OwnerComponent,
    RenterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
      NgxPaginationModule,
      MatSelectModule,
      MatButtonToggleModule,
      MatIconModule,
      SharedModule,

  ],
  exports:[
    OwnerComponent,
    RenterComponent
  ]
})
export class UsersModule { }
