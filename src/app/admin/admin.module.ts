import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportsDetailsComponent } from './component/reports-details/reports-details.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { HttpClientModule } from '@angular/common/http';
import { ListcontactsComponent } from './component/listcontacts/listcontacts.component';



@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent,
    AdminhomeComponent,
    ListcontactsComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,


  ],
  exports:[
    ListcontactsComponent
  ]
})
export class AdminModule { }
