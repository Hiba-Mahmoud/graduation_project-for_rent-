import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FavouritService {

  constructor(private http:HttpClient) { }

  getFavourits(){
    let url="http://127.0.0.1:8000/api/renter/myfavourite";
    
    return this.http.get(url);
  }
}
