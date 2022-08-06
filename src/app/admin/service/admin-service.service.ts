import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icontacts } from './contacts';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
private url = 'https://jsonplaceholder.typicode.com/posts';
  paginator: any;
  constructor(private HttpClient:HttpClient) {

  }
  getAllContacts() :Observable<Icontacts[]>{
   return this.HttpClient.get<Icontacts[]>(this.url);
  }
}
