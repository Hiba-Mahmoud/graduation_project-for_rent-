import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportShowService {

  constructor(private http:HttpClient) { }

  getReport(id :number){
    let url="http://127.0.0.1:8000/api/admin/contactUs/show/";
    
    return this.http.get(url+id);
  }

}
