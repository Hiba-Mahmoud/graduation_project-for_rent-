import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoaveDataService {
  // myMethod$: Observable<any>;
    private myMethodSubject :string;
    private userId:number;
  constructor() {
    this.myMethodSubject = "";
  }

  myMethod(data:string) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject=data;
}

getmyMethodSubject():string{
  return this.myMethodSubject;
}

setUserID(id:number){
  this.userId = id;
  console.log('inside set user id'+this.userId)
}

getId():number{
  console.log('inside get user id'+this.userId)
  return this.userId;
}
}
