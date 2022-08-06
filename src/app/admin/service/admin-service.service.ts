import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private http: HttpClient) { }

   getAll(apiUrl :string):Observable<User[]>
   {
     let allAdmins=this.http.get<User[]>(apiUrl);
     return allAdmins;
   }

   delete(){
    
   }
}
