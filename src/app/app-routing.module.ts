import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './shared/component/settings/settings.component';
import { EditpasswordComponent } from './shared/component/editpassword/editpassword.component';
import { EditpersonaldataComponent } from './shared/component/editpersonaldata/editpersonaldata.component';
import { UserfavouritesComponent } from './components/userfavourites/userfavourites.component';




const routes: Routes = [
  {
    path:'settings',component:SettingsComponent},
  {
    path:'editpassword',component:EditpasswordComponent},
  {
    path:'editpersonaldata',component:EditpersonaldataComponent },
     
  {
    path:'userfavourites',component:UserfavouritesComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
