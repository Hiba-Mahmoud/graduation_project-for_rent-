import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {
url="http://127.0.0.1:8000/api/admin/team/destroy/";
  constructor(private http:HttpClient) { }

  delMem(id :number){
    return this.http.delete(this.url+id);
          // window.location.reload();

  }
}
