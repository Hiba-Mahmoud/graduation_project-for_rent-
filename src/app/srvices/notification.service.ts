import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/auth/service/token.service';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  token:string;

  constructor(private http: HttpClient, private localstorage:TokenService) {}
  
  get_All_notification():Observable<any>
  {
    //token 
    let local=this.localstorage.gettokenfromLocalstorage();
  let session=this.localstorage.getToken();

  if(local){
    console.log(local)
    this.token =local;
  }else if (session){
    console.log(session)
    this.token =session;

  }
  const headers = new HttpHeaders({

    'Authorization': `Bearer ${this.token}`
  });
    //end token 
    let all_notification=this.http.get("http://127.0.0.1:8000/api/get_notification", {headers : headers});
    return all_notification;
  }
}
