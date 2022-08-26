import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/auth/service/token.service';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AdvertismentService } from '../../services/advertisment.service';
import{NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  strikeCheckout:any = null;
  token:string;
  id :any;
  data:any={}
  images:any=[]
  adverId:any ;
  reviews:any;
  suggestion:any;
  suggesObgImage:any;
  loading:boolean=true;
  isLogin!:boolean;

  furniture:any;

  success: boolean = false;
  failure:boolean = false;
  advertNumber: any;

  selected: boolean;
  selectedChange = new EventEmitter<boolean>();

  starRating=0
  Rating=5
  result: any;

  isAdmin!:boolean;
  isRenter!:boolean;
  isOwner!:boolean;
  isSuperAdmin!:boolean;

  commentForm=new FormGroup({
    comment :new FormControl('',Validators.minLength(4)),
    count :new FormControl('',Validators.required),

  })
  role: string;

  constructor(private route:ActivatedRoute ,private advertismentService:AdvertismentService , private router:Router,private http:HttpClient

    ,private _AuthGuard:AuthGuard,private localstorage:TokenService ) {
    this.id=this.route.snapshot.paramMap.get("id");

    if(this.role == 'admin'){
      this.isAdmin=true;
    }else if(this.role == 'superAdmin'){
      this.isSuperAdmin=true;
    }else if(this.role == 'renter'){
      this.isRenter=true;
    }else if(this.role == 'owner'){
      this.isOwner=true;
    }



   }

  ngOnInit(): void {

    this.checkLogin();

    this.getAdvertismentById();
    this.stripePaymentGateway();


  }
 getAdvertismentById(){
   this.advertismentService.getAdvertismentById("http://127.0.0.1:8000/api/show/advertisement/",this.id).subscribe((res:any)=>{
    console.log(res)
    this.data=res.advertisement[0];
        this.images= this.data.advertisement_image ;
    this.adverId=this.data.id;
    this.reviews=res.reviews;
    this.suggestion=res.suggestion;
    this.advertNumber=res.advertisement_num;
    this.result=res;
    this.loading=false;
    // this.suggesObgImage=this.suggestion[0].advertisement_image[0].image_name;
   })

 }


//  suggestionNavigate(id:any){
//   this.router.navigateByUrl('/details/'+id).then();


//  }
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



  checkLogin(){
    this._AuthGuard.isLogin.subscribe((res:any)=>{
      this.isLogin = res
    })
  }

  // toggleSelected() {
  //   this.selected = !this.selected;
  //   this.selectedChange.emit(this.selected);
  //   console.log(this.selected);
  // }


  onSubmit(){
    console.log(this.commentForm.value);
    let local=this.localstorage.gettokenfromLocalstorage();
    let session=this.localstorage.getToken();
  
    if(local){
      this.token =local;
    }else if (session){
      this.token =session;
  
    }
    const headers = new HttpHeaders({
 
      'Authorization': `Bearer ${this.token}`
    });
    console.log(headers);

    this.http.post("http://127.0.0.1:8000/api/rate/store/" +this.adverId,this.commentForm.value ,{ headers: headers }).subscribe((data) => {
      console.log(data);      
      // this.router.navigate(['/details/'+this.adverId]);

      
      this.getAdvertismentById();
      this.commentForm.reset();

      
   }
)

   
  }
}
