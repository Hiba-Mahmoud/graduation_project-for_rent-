import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './admin/component/add-admin/add-admin.component';
import { AdminsComponent } from './admin/component/admins/admins.component';
import { AdverRequestsComponent } from './admin/component/adver-requests/adver-requests.component';
import { OwnersComponent } from './admin/component/owners/owners.component';
import { RentersComponent } from './admin/component/renters/renters.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { AddProperityComponent } from './components/add-properity/add-properity.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './shared/component/cart-details/cart-details.component';
import { EditpasswordComponent } from './shared/component/editpassword/editpassword.component';
import { EditpersonaldataComponent } from './shared/component/editpersonaldata/editpersonaldata.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { OwnerComponent } from './users/component/owner/owner.component';

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
   //start admin routes
  {
    path: 'allAdmins', component: AdminsComponent
  },
  {
    path: 'allRenters', component: RentersComponent
  },
  {
    path: 'allOwners', component: OwnersComponent
  },
  {
    path: 'requests', component:AdverRequestsComponent
  },
  {
    path: 'addAdmin', component: AddAdminComponent
  },
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
