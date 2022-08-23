import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http:HttpClient) { }
  getAllMembers(){
    let url="http://127.0.0.1:8000/api/teams/list";
    
    return this.http.get(url);
  }
}

