import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListAllOwnerProperityService {
  private url='https://jsonplaceholder.typicode.com/photos'
  constructor(private http :HttpClient) { }
  getOwnerproperities(){
    return this.http.get(this.url,)
  }
}
