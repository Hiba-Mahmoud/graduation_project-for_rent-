import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  url = 'localhost:8000/api/cities';

  constructor(private http:HttpClient) { }


  getcities(url:string):Observable<any>
{
  return this.http.get(url);
}

getPending(url:string,header:any):Observable<any>
{
  return this.http.get(url,{headers:header});
}
 getadvertismentdetails(url:string,id:any):Observable<any>
{
  return this.http.get(url+id)
}
getpendingCount(url:string):Observable<any>
{
  return this.http.get(url)
}


}
