import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getFollowUsInfo(apiUrl :string):Observable<any>
  {
    let followUsInfo=this.http.get(apiUrl);
    return followUsInfo;
  }
}
