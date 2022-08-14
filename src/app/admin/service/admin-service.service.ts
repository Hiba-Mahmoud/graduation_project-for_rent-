import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getAll(apiUrl :string):Observable<User[]>
  {
    let allAdmins=this.http.get<User[]>(apiUrl);
    return allAdmins;
  }

  getAllContacts() :Observable<Icontacts[]>{
   return this.http.get<Icontacts[]>(this.url);
  }
   delete(){

   }
}
