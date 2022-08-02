import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CartComponent } from './component/cart/cart.component';
import { CartDetailsComponent } from './component/cart-details/cart-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { SettingsComponent } from './component/settings/settings.component';
import { EditpasswordComponent } from './component/editpassword/editpassword.component';
import { EditpersonaldataComponent } from './component/editpersonaldata/editpersonaldata.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent,
    NotFoundComponent,
    CartComponent,
    CartDetailsComponent,
    FooterComponent,
    SettingsComponent,
    EditpasswordComponent,
    EditpersonaldataComponent
   
   
  ],
  imports: [
    CommonModule
   
  ],
  exports:[
    SettingsComponent,
    EditpasswordComponent,
    EditpersonaldataComponent
  ]
})
export class SharedModule { }
