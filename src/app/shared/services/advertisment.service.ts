import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {
  basePath: string;

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

  getAllLocations():Observable<any>
  {
    let allLocations=this.http.get("http://127.0.0.1:8000/api/cities");
    return allLocations;
  }

  getAllTypes():Observable<any>
  {
    let allTypes=this.http.get("http://127.0.0.1:8000/api/type_search");
    return allTypes;
  }

  getBedsNumber():Observable<any>
  {
    let bedsNumber=this.http.get("http://127.0.0.1:8000/api/bedroom_search");
    return bedsNumber;
  }


  getBySearch(param:any):Observable<any>
  {
   

    let allDataBySearch=this.http.get("http://127.0.0.1:8000/api/search", { 
        params: param,
        withCredentials: false

    }) 
            return allDataBySearch;


  }





 
}
