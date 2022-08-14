import { Component, OnInit } from '@angular/core';
import { AdvertismentService } from '../shared/services/advertisment.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   allAdvert: any = [];
   totalNumber:any;
   page:number=1;
   loading:boolean=true;
  constructor(private advertismentService:AdvertismentService) { }

  ngOnInit(): void {
    this.advertismentService.getAll("http://127.0.0.1:8000/api/Home").subscribe((res)=>{
      console.log(res.allAdvertisements);
       this.allAdvert=res.allAdvertisements;
       this.loading=false;
       this.totalNumber=res.allAdvertisements.length;
        console.log(this.allAdvert[2].advertisement_image[0].image_name);
        console.log(this.totalNumber);
     })
  }
}
