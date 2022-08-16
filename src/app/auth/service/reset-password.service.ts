import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
private resetpswordresponseMsg:string;
private code:string;
private email:string;
  constructor() { }

  setResetpswordresponseMsg(message:string){
    this.resetpswordresponseMsg=message;

  }

  getResetpswordresponseMsg():string{
    return this.resetpswordresponseMsg;
  }

  setcode(code:string){
    sessionStorage.setItem('code',code);
  }

  getcode():string{
    return sessionStorage.getItem('code')
  }
  setemail(email:string){
    this.email = email;
  }
  getEmail():string{
    return this.email;
  }
}
