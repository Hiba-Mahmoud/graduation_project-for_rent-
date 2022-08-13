import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handeltoken(token:string){
    this.setToken(token);
  }

  setToken(token:string){
    sessionStorage.setItem('token',token);
  }
  getToken():string{
    return sessionStorage.getItem('token');
  }

  handelId(id:string){
    this.setId(id);
  }

  setId(id:string){
    sessionStorage.setItem('id',id);
  }
  getId():string{
    return sessionStorage.getItem('id');
  }

  clearLocalStorage(){
    sessionStorage.clear();

  }
}
