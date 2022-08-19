import { TokenService } from 'src/app/auth/service/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  token:any;
  pend=0;
  rentedAds=0;
  NotRented=0;
  constructor(private localsrorage:TokenService, private route: Router,private http:HttpClient ,private owner:OwnerService) { }
  ngOnInit(): void {
    this.getallPending();
    this.  getallrented();
    this.getallNotRented();

  }
  getallPending(){
    let header =this.getToken();

      let pending ='http://127.0.0.1:8000/api/pending_advertisement';
      this.owner.getPending(pending,header).subscribe(data=>{
        console.log(data.count)
        this.pend = data.count

      },error=>{
        console.log(error)
      })

  }

  getallNotRented(){
    let header =this.getToken();

      let pending ='http://127.0.0.1:8000/api/notrented_advertisement';
      this.owner.getPending(pending,header).subscribe(data=>{
        console.log(data.count)
        this.NotRented = data.count;

      },error=>{
        console.log(error)
      })

  }

  getallrented(){
    let header =this.getToken();
      let rent ='http://127.0.0.1:8000/api/rented_advertisement';
      this.owner.getPending(rent,header).subscribe(data=>{
        console.log(data.count)
        this.rentedAds=data.count;
        // console.log(data)

      },error=>{
        console.log(error)
      })

  }

  getToken():any{
    let local=this.localsrorage.gettokenfromLocalstorage();
    let session=this.localsrorage.getToken();

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

  navigate(){
    this.route.navigate(['notrented'])
  }
  pending(){
    this.route.navigate(['pending'])
  }
  rented(){
    this.route.navigate(['rented'])

  }
  payedRending(){
    this.route.navigate(['payed-rented'])

  }
}
