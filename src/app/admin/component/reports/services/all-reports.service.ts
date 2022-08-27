import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllReportsService {

  constructor(private http:HttpClient) { }

  getAllReports():Observable<any>{
    let url="http://127.0.0.1:8000/api/admin/contactUs/list";

    return this.http.get(url);
  }


}

