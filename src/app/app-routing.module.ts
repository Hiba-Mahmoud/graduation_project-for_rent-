import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AddProperityComponent } from './components/add-properity/add-properity.component';
import { ListAllOwnerProperitiesComponent } from './components/list-all-owner-properities/list-all-owner-properities.component';
import { UpdateProperityAdvertisingComponent } from './components/update-properity-advertising/update-properity-advertising.component';
import { OwnerComponent } from './users/component/owner/owner.component';
import { AddAdminComponent } from './admin/component/add-admin/add-admin.component';
import { AdminsComponent } from './admin/component/admins/admins.component';
import { AdverRequestsComponent } from './admin/component/adver-requests/adver-requests.component';
import { OwnersComponent } from './admin/component/owners/owners.component';
import { RentersComponent } from './admin/component/renters/renters.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './shared/component/cart-details/cart-details.component';
import { EditpasswordComponent } from './shared/component/editpassword/editpassword.component';
import { EditpersonaldataComponent } from './shared/component/editpersonaldata/editpersonaldata.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AdminhomeComponent } from './admin/component/adminhome/adminhome.component';
import { ListcontactsComponent } from './admin/component/listcontacts/listcontacts.component';
import { NotRentedYetComponent } from './components/not-rented-yet/not-rented-yet.component';
import { PendingComponent } from './components/pending/pending.component';
import { RentedComponent } from './components/rented/rented.component';
import { MailConfirmComponent } from './auth/component/mail-confirm/mail-confirm.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },


  {
    path: "home", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "details/:id", component: CartDetailsComponent
  },
  { path: 'owner', component: OwnerComponent },
  { path: 'addProperity', component: AddProperityComponent },

  { path: 'editpassword', component: EditpasswordComponent },
  {
    path: 'editpersonaldata', component: EditpersonaldataComponent
  },

  
  { path:"mailverifiy", component:MailConfirmComponent},
  {path: 'forgetpassword', component:ForgetPasswordComponent},
  // shared Routes
  { path: 'editpassword', component: EditpasswordComponent ,canActivate:[AuthGuard]},
  {path:'editpersonaldata',component:EditpersonaldataComponent ,canActivate:[AuthGuard]},
  // user and admin ahared Routes
  { path: 'about', component:AboutComponent},
  { path: 'all-owner-properites', component: ListAllOwnerProperitiesComponent },
  // owner Routes
  { path: 'owner', component: OwnerComponent,canActivate:[AuthGuard] },
  { path: 'addProperity', component: AddProperityComponent,canActivate:[AuthGuard] },
  { path: 'UpdateProperityAdvertising', component: UpdateProperityAdvertisingComponent,canActivate:[AuthGuard] },
  { path:"notrented", component:NotRentedYetComponent,canActivate:[AuthGuard]},
  { path:"pending", component:PendingComponent,canActivate:[AuthGuard]},
  { path:"rented", component:RentedComponent,canActivate:[AuthGuard]},
  //start admin routes
  { path: 'adminhome', component:AdminhomeComponent,canActivate:[AuthGuard]},
  { path: 'all-contacts', component:ListcontactsComponent,canActivate:[AuthGuard]},
  {path: 'allAdmins', component: AdminsComponent,canActivate:[AuthGuard]},
  {path: 'allRenters', component: RentersComponent,canActivate:[AuthGuard]},
  {path: 'allOwners', component: OwnersComponent,canActivate:[AuthGuard]},
  {path: 'requests', component:AdverRequestsComponent,canActivate:[AuthGuard]},
  {path: 'addAdmin', component: AddAdminComponent,canActivate:[AuthGuard]},

 // end admin routes
  // {
  //   path:'userfavourites',component:UserfavouritesComponent },
  // { path: 'ListAllOwnerProperitiesComponent', component: ListAllOwnerProperitiesComponent },
  // { path: 'UpdateProperityAdvertisingComponent', component: UpdateProperityAdvertisingComponent },

  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
