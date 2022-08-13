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
    localStorage.setItem('token',token);
  }
  getToken():string{
    return localStorage.getItem('token');
  }

  handelId(id:string){
    this.setId(id);
  }

  setId(id:string){
    localStorage.setItem('id',id);
  }
  getId():string{
    return localStorage.getItem('id');
  }

  clearLocalStorage(){
    localStorage.clear();

  }
}
