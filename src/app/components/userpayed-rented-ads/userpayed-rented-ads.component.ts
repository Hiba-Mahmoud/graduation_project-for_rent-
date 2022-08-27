import { OwnerService } from './../../services/owner.service';
import { TokenService } from './../../auth/service/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-userpayed-rented-ads',
  templateUrl: './userpayed-rented-ads.component.html',
  styleUrls: ['./userpayed-rented-ads.component.css']
})
export class UserpayedRentedAdsComponent implements OnInit {
  strikeCheckout:any = null;
  totalNumber: any;
    page: number = 1;
    token:any;
    advertisment:any;
    // token: any;
  length: any;
  result:any;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displaycolumns: string[] = ['الاعلان', 'حذف'];
  constructor(private http:HttpClient,private localstorage:TokenService,private user:OwnerService) {


  }

  ngOnInit(): void {
    this.getToken()
    this.getallPayedAds();
    this.stripePaymentGateway();

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


  makePayment(amount:any,advertisement:any,owner:any) {
    const http=this.http;
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
    console.log(headers);
     const strikeCheckout = (<any>window).StripeCheckout.configure({
 
       key: 'pk_test_51LX8ftH4ooOXAWsbNANhQAaiF9nzIHfUiThsjYEnPP4WQwOW5ylzc1NtWK1qDapTutl291B1FEyjgXDxdyxAsLZh00dL6UnlqH',
       locale: 'auto',
       token: function (stripeToken: any) {
         console.log(stripeToken.id);
        http.post('http://127.0.0.1:8000/api/paymentmethod',{
         owner_id: owner,
         adver_id:advertisement,
         price:amount,
         token:stripeToken.id,
       },{headers:headers}) .subscribe(
         (data:any)=>{
           console.log(data);
 
     });
   }
       });
 
 
 
 
 
 
     strikeCheckout.open({
       name: 'RemoteStack',
       description: 'Payment widgets',
       amount: amount * 100,
     });
 
   }
 
   stripePaymentGateway() {
     if(!window.document.getElementById('stripe-script')) {
       const scr = window.document.createElement("script");
       scr.id = "stripe-script";
       scr.type = "text/javascript";
       scr.src = "https://checkout.stripe.com/checkout.js";
 
       scr.onload = () => {
         this.strikeCheckout = (<any>window).StripeCheckout.configure({
           key: 'pk_test_51LX8ftH4ooOXAWsbNANhQAaiF9nzIHfUiThsjYEnPP4WQwOW5ylzc1NtWK1qDapTutl291B1FEyjgXDxdyxAsLZh00dL6UnlqH',
           locale: 'auto',
           token: function (stripeToken: any) {
             console.log(1234)
             alert('Payment via stripe successfull!');
           }
         });
       }
 
       window.document.body.appendChild(scr);
     }
   }
 

  getallPayedAds(){

    let header = this.getToken();
    let link = 'http://127.0.0.1:8000/api/renter/advertisementrented';

    this.user.getPending(link,header).subscribe((res)=>{
      console.log('ddddddddd')
     console.log(res)
     this.result =res;
     console.log( res.allAdvertisements)
     this.advertisment = res.allAdvertisements
     console.log( this.advertisment)
     this.length = res.count;
    //  this.dataSource = new MatTableDataSource(this.advertisment);
    //  this.length= data;
    //  this.dataSource.paginator = this.paginator;
    //  this.dataSource.sort = this.sort;
    })

  }



}
