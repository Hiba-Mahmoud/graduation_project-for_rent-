import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetLinksService {

  constructor(private http:HttpClient) { }
  getAllLinks(){
    let url="http://127.0.0.1:8000/api/follow_us/list";    
    return this.http.get(url);
  }

}

