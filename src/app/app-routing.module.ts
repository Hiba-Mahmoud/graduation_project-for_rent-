import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProperityComponent } from './components/add-properity/add-properity.component';
import { ListAllOwnerProperitiesComponent } from './components/list-all-owner-properities/list-all-owner-properities.component';
import { UpdateProperityAdvertisingComponent } from './components/update-properity-advertising/update-properity-advertising.component';
import { OwnerComponent } from './users/component/owner/owner.component';
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

const routes: Routes = [
  {
    path: "", redirectTo: 'home', pathMatch: 'full'
  },
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
    path: "details", component: CartDetailsComponent
  },
  { path: 'owner', component:OwnerComponent },
  { path: 'addProperity', component: AddProperityComponent },

  {path:'editpassword',component:EditpasswordComponent},
  {
    path:'editpersonaldata',component:EditpersonaldataComponent },
    { path: 'OwnerComponent', component: OwnerComponent },
  { path: 'AddProperityComponent', component: AddProperityComponent },
  { path: 'ListAllOwnerProperities', component: ListAllOwnerProperitiesComponent },
  { path: 'UpdateProperityAdvertising', component: UpdateProperityAdvertisingComponent },
  { path: 'about', component:AboutComponent},
  { path: 'adminhome', component:AdminhomeComponent},
  { path: 'all-contacts', component:ListcontactsComponent},

  { path:"notrented", component:NotRentedYetComponent},
  { path:"pending", component:PendingComponent},
  { path:"rented", component:RentedComponent},
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
