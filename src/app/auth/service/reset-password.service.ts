import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
private resetpswordresponseMsg:string;
private code:string;
  constructor() { }

  setResetpswordresponseMsg(message:string){
    this.resetpswordresponseMsg=message;

  }

  getResetpswordresponseMsg():string{
    return this.resetpswordresponseMsg;
  }

  setcode(code:string){
    this.code = code;
  }

  getcode():string{
    return this.code
  }
}
