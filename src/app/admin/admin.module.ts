import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportsDetailsComponent } from './component/reports-details/reports-details.component';



@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
