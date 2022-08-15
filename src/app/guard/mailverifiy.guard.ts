import { TokenService } from './../auth/service/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailverifiyGuard implements CanActivate {
constructor(private route:Router , private token:TokenService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = this.token.getId();
      let sessionToken = this.token.getToken();
      if(id && (!sessionToken)){

        return true;
      }else{
        this.route.navigateByUrl('/owner')
        return false;
      }
  }

}
