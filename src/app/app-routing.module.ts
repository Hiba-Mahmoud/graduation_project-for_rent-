import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProperityComponent } from './components/add-properity/add-properity.component';
import { ListAllOwnerProperitiesComponent } from './components/list-all-owner-properities/list-all-owner-properities.component';
import { UpdateProperityAdvertisingComponent } from './components/update-properity-advertising/update-properity-advertising.component';
import { OwnerComponent } from './users/component/owner/owner.component';

const routes: Routes = [
  { path: 'OwnerComponent', component: OwnerComponent },
  { path: 'AddProperityComponent', component: AddProperityComponent },
  { path: 'ListAllOwnerProperitiesComponent', component: ListAllOwnerProperitiesComponent },
  { path: 'UpdateProperityAdvertisingComponent', component: UpdateProperityAdvertisingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
