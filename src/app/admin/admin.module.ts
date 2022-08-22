import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportsDetailsComponent } from './component/reports-details/reports-details.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { ListcontactsComponent } from './component/listcontacts/listcontacts.component';
import { OwnersComponent } from './component/owners/owners.component';
import { RentersComponent } from './component/renters/renters.component';
import { AdminsComponent } from './component/admins/admins.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
=======
import { HttpClientModule } from '@angular/common/http';
// import {MatTableModule} from '@angular/material/table';
// import {MatPaginatorModule} from '@angular/material/paginator';
>>>>>>> 0fcb2d50a31ec16c4fc660cee278680cb71a7e6d
import { MaterialModule } from '../material/material.module';
// import { MatSortModule } from '@angular/material/sort';
import { AdverRequestsComponent } from './component/adver-requests/adver-requests.component';
import { TokenInterceptorInterceptor } from './interceptor/token-interceptor.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent,
    AdminhomeComponent,
    ListcontactsComponent,
    OwnersComponent,
    RentersComponent,
    AdminsComponent,
    AddAdminComponent,
    AdverRequestsComponent,
    AdminsComponent,

  ],


  imports: [
    CommonModule,
    HttpClientModule,
    // MatTableModule,
    // MatPaginatorModule,
    MaterialModule,
<<<<<<< HEAD
    MatSortModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
=======
    // MatSortModule,

>>>>>>> 0fcb2d50a31ec16c4fc660cee278680cb71a7e6d
  ],

  exports:[
    ListcontactsComponent,
    OwnersComponent,
    RentersComponent,
    AdminsComponent,
    AddAdminComponent,
    AdverRequestsComponent,
    AdminsComponent,




  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }]


})
export class AdminModule { }
