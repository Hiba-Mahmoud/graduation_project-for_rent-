import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportsDetailsComponent } from './component/reports-details/reports-details.component';
import { OwnersComponent } from './component/owners/owners.component';
import { RentersComponent } from './component/renters/renters.component';
import { AdminsComponent } from './component/admins/admins.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MaterialModule } from '../material/material.module';
import { MatSortModule } from '@angular/material/sort';
import { AdverRequestsComponent } from './component/adver-requests/adver-requests.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent,
    OwnersComponent,
    RentersComponent,
    AdminsComponent,
    AddAdminComponent,
    AdverRequestsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule,
    MatSortModule,
  
  ],
  exports : [
    AdminsComponent,
    AddAdminComponent,
   OwnersComponent,
   RentersComponent,
   AddAdminComponent,

  ]
})
export class AdminModule { }
