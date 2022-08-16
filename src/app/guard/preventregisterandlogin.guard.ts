import { TokenService } from './../auth/service/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventregisterandloginGuard implements CanActivate {
constructor(private router:Router,private token:TokenService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let islogin= this.token.getToken();
      if(islogin){
        this.router.navigateByUrl('/owner')
        return false;
      }else{

        return true;
      }
  }

}