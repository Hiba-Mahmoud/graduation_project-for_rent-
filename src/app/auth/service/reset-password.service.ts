import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
private resetpswordresponseMsg:string;
  constructor() { }

  setResetpswordresponseMsg(message:string){
    this.resetpswordresponseMsg=message;

  }

  getResetpswordresponseMsg():string{
    return this.resetpswordresponseMsg;
  }
}
