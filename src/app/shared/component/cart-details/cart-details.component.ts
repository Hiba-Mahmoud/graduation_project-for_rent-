import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdvertismentService } from '../../services/advertisment.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  id :any;
  data:any={}
  images:any=[]
  adverId:any ;
  review:any; 
  suggestion:any;
  suggesObgImage:any;
  constructor(private route:ActivatedRoute ,private advertismentService:AdvertismentService , private router:Router) {
    this.id=this.route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.getAdvertismentById()
  }
 getAdvertismentById(){
   this.advertismentService.getAdvertismentById("http://127.0.0.1:8000/api/show/advertisement/",this.id).subscribe((res:any)=>{
    this.data=res.advertisement[0];
    this.images= this.data.advertisement_image ;
    this.adverId=this.data.id;
    this.review=res.reviews;
    this.suggestion=res.suggestion;
    // this.suggesObgImage=this.suggestion[0].advertisement_image[0].image_name;
     console.log(this.data[0].advertisement_image[0].image_name);
   })
  
 }
}
