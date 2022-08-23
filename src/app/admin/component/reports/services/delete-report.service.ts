import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteReportService {
 url="http://127.0.0.1:8000/api/admin/contactUs/delete/";
  constructor(private http:HttpClient) { }

  delRepo(id :number){
    return this.http.delete(this.url+id);
          // window.location.reload();

  }
}
