import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddReportService {
   url="http://127.0.0.1:8000/api/contactUs/store";

  constructor(private http:HttpClient) { }
  saveDate(data :any){
    return this.http.post(this.url,data);
  }
}
