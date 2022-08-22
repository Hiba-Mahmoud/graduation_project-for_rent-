import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDesService {

  constructor(private http:HttpClient) { }

  getAbout(){
    let url="http://127.0.0.1:8000/api/about/list";
    
    return this.http.get(url);
  }


}

