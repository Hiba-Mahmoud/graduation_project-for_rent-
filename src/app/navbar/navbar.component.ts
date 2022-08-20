import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../auth/service/token.service';
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin!:boolean;


  name!: string;
  role!: string;
  image!: string;

  isAdmin!:boolean;
  isRenter!:boolean;
  isOwner!:boolean;
  isSuperAdmin!:boolean;
  constructor( private router: Router ,
    private removeToken:TokenService,private _AuthGuard:AuthGuard
  ) { }

ngOnInit(): void {
    this.checkLogin();
    this.name = localStorage.getItem('name');
    this.image = localStorage.getItem('image');
    this.role = localStorage.getItem('role');

    if(this.role == 'admin'){
      this.isAdmin=true;
    }else if(this.role == 'superAdmin'){
      this.isSuperAdmin=true;
    }else if(this.role == 'renter'){
      this.isRenter=true;
    }else if(this.role == 'owner'){
      this.isOwner=true;
    }
 }

checkLogin(){
  this._AuthGuard.isLogin.subscribe((res:any)=>{
    this.isLogin = res
  })
}


logout(){
  this.removeToken.clearLocalStorage();
  this._AuthGuard.isLogin.next(false);

  this.router.navigateByUrl('/login');
}


}
