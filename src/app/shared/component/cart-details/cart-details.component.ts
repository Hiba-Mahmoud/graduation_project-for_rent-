import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/interface/paymentmethod';
import { AdvertismentService } from '../../services/advertisment.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  strikeCheckout:any = null;
  paymentmethod=new Payment;
  pay :any;
  id :any;
  data:any={}
  images:any=[]
  adverId:any ;
  review:any; 
  suggestion:any;
  suggesObgImage:any;
  loading:boolean=true;
  success: boolean = false
  failure:boolean = false
  constructor(private route:ActivatedRoute ,private checkout:CheckoutService,private advertismentService:AdvertismentService , private router:Router,private http:HttpClient) {
    this.id=this.route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.getAdvertismentById();
    this.stripePaymentGateway();


  }
 getAdvertismentById(){
   this.advertismentService.getAdvertismentById("http://127.0.0.1:8000/api/show/advertisement/",this.id).subscribe((res:any)=>{
    this.data=res.advertisement[0];
    this.images= this.data.advertisement_image ;
    this.adverId=this.data.id;
    this.review=res.reviews;
    this.suggestion=res.suggestion;
    this.loading=false;
    // this.suggesObgImage=this.suggestion[0].advertisement_image[0].image_name;
     console.log(this.data[0].advertisement_image[0].image_name);
   })
  
 }
 makePayment(amount:any,advertisement:any,owner:any) {
   const http=this.http;
   
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      
      key: 'pk_test_51LX8ftH4ooOXAWsbNANhQAaiF9nzIHfUiThsjYEnPP4WQwOW5ylzc1NtWK1qDapTutl291B1FEyjgXDxdyxAsLZh00dL6UnlqH',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken.id);
       http.post('http://localhost:8000/api/paymentmethod',{
        owner_id: owner,
        adver_id:advertisement,
        price:amount,
        token:stripeToken.id,
      }) .subscribe(
        (data:any)=>{
          console.log(data);
          if(data.code ==1){
      }
    });
  }
      });   
    
    
        

   
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100,
      currency:'LE'
      
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
}
