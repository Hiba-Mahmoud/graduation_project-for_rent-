import { OwnerService } from './../../services/owner.service';
import { TokenService } from './../../auth/service/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpayed-rented-ads',
  templateUrl: './userpayed-rented-ads.component.html',
  styleUrls: ['./userpayed-rented-ads.component.css']
})
export class UserpayedRentedAdsComponent implements OnInit {
  totalNumber: any;
    page: number = 1;
    token:any;
    allAdvert:any;
  constructor(private http:HttpClient,private localstorage:TokenService,private user:OwnerService) { }

  ngOnInit(): void {
    this.getToken()
    this.getallPayedAds();
  }

  getallPayedAds(){

    let header = this.getToken();
    let link = 'http://127.0.0.1:8000/api/renter/advertisementrented';

    this.user.getPending(link,header).subscribe((res)=>{
      console.log('ddddddddd')
     console.log(res.data)
     this.allAdvert = res.data
    })

  }

  getToken():any{
    let local=this.localstorage.gettokenfromLocalstorage();
  let session=this.localstorage.getToken();

  if(local){
    console.log(local)
    this.token =local;
  }else if (session){
    console.log(session)
    this.token =session;
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  return headers;
  }

}
