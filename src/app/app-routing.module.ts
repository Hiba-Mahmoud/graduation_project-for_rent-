import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './shared/component/cart-details/cart-details.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'home', pathMatch: 'full'},
  {
    path: "home",component:HomeComponent},
  {
    path: "login", component:LoginComponent},
    {
      path: "register", component:RegisterComponent},
    {
      path: "details", component:CartDetailsComponent },
    
  {
    path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
