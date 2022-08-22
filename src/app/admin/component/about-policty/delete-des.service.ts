import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeleteDesService {
  
 url="http://127.0.0.1:8000/api/admin/about/delete/";
 constructor(private http:HttpClient) { }

 delDesc(id :number){
   return this.http.delete(this.url+id);
         // window.location.reload();

 }

}
