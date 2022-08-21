
import { Injectable } from '@angular/core';
// import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutTeamsService {

  constructor(private http:HttpClient) { }

    getData(){
      let url="http://127.0.0.1:8000/api/about/list";

      return this.http.get(url);
    }

}
