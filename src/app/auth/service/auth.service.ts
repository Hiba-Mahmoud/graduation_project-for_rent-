import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  userNavigation(respons:string){
    if(respons =='owner'){
      this.router.navigate(['/owner']);

    }else if(respons =='renter'){
      this.router.navigate(['/']);

    }else if (respons =='admin'){
      this.router.navigate(['/adminhome']);

    }else{
      this.router.navigate(['/adminhome']);

    }

  }
}
