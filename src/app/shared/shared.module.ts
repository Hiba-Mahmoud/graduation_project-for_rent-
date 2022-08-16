import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './component/navbar/navbar.component'

import { NotFoundComponent } from './component/not-found/not-found.component';
import { CartComponent } from './component/cart/cart.component';
import { CartDetailsComponent } from './component/cart-details/cart-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { SettingsComponent } from './component/settings/settings.component';
import { EditpasswordComponent } from './component/editpassword/editpassword.component';
import { EditpersonaldataComponent } from './component/editpersonaldata/editpersonaldata.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './component/comments/comments.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CartComponent,
    NotFoundComponent,
    CartComponent,
    CartDetailsComponent,
    FooterComponent,
    SettingsComponent,
    EditpasswordComponent,
    EditpersonaldataComponent,
    CommentsComponent,
    SideBarComponent,




  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,

    MatSelectModule,

    MatSelectModule ,
   NgbModule,
   HttpClientModule ,
   MatProgressSpinnerModule,



  ],
  exports :[
    FooterComponent,
    CartComponent,
    CartDetailsComponent,
    SettingsComponent,
    EditpasswordComponent,
    EditpersonaldataComponent,
    CommentsComponent,
    SideBarComponent,
    CartComponent,
    NotFoundComponent,
    CartComponent,
    CartDetailsComponent,
    FooterComponent,

    SettingsComponent,
    EditpasswordComponent,
    EditpersonaldataComponent,
    CommentsComponent,
    SideBarComponent,


  ],

})

export class SharedModule { }
