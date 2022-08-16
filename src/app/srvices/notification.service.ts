import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {}
  get_All_notification():Observable<any>
  {
    let all_notification=this.http.get("http://127.0.0.1:8000/api/get_notification");
    return all_notification;
  }
}
