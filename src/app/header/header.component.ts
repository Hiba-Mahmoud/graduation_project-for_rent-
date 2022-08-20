import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../auth/service/token.service';
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin!:boolean;


  name!: string;
  role!: string;
  id!: any;

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
    this.id = localStorage.getItem('id');
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
