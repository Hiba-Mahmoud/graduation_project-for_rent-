import { HttpClient } from '@angular/common/http';
import { TokenService } from './../auth/service/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogin = new BehaviorSubject(false);

  constructor(private token:TokenService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLogin = this.token.getToken();
      let localstorage =this.token.gettokenfromLocalstorage();
      if(isLogin || localstorage){
        this.isLogin.next(true);
        return true;
      }else{
        this.router.navigateByUrl('/login')
        this.isLogin.next(false);

        return false;
      }
  }

}
