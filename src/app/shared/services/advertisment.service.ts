import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {

  constructor(private http: HttpClient) { }
  getAll(apiUrl :string):Observable<any>
  {
    let allAdvertisments=this.http.get(apiUrl);
    return allAdvertisments;
  }

  getAdvertismentById(apiUrl :string ,id:any ):Observable<any>
  {
    let advertisment=this.http.get(apiUrl +id);
    return advertisment;
  }

  saveComment(apiUrl :string ,data:any , id:any ){
    return  this.http.post(apiUrl+id ,data );
   
  }
 
}
