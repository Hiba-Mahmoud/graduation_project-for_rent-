import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';

import { Icontacts } from './contacts';
import { User } from 'src/app/interface/user';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

private url = 'https://jsonplaceholder.typicode.com/posts';
  paginator: any;
  
  constructor(private http: HttpClient) { }

//   getAllOwners():Observable<User[]>
// {
//     if(localStorage.getItem("token")){
//       let header = new HttpHeaders().set(
//         "Authorization",
//          localStorage.getItem("token")
//       );
//       let allAdmins=this.http.get<User[]>("http://127.0.0.1:8000/api/admin/owners" , {headers: header});
//       return allAdmins;


//   }else if(sessionStorage.getItem("token")){
//       let header = new HttpHeaders().set(
//         "Authorization",
//         sessionStorage.getItem("token")
//       );
//       let allAdmins=this.http.get<User[]>("http://127.0.0.1:8000/api/admin/owners" , {headers: header});
//       return allAdmins;
//     }
    
   
//   }
getAll(apiUrl :string):Observable<any>
{
  let allAdmins=this.http.get<User[]>(apiUrl);
  return allAdmins;
}
  getAllContacts() :Observable<Icontacts[]>{
   return this.http.get<Icontacts[]>(this.url);
  }
   delete(apiUrl :string ,id:number):Observable<any>
   {
    return this.http.delete(apiUrl+id);
   }

   block(apiUrl :string ,id:number):Observable<any>
   {
    return this.http.put(apiUrl+id,'');
   }

   accept(apiUrl :string ,id:number):Observable<any>
   {
    return this.http.put(apiUrl+id ,'');
   }

   reject(apiUrl :string ,id:number):Observable<any>
   {
    return this.http.put(apiUrl+id ,'');
   }
}
