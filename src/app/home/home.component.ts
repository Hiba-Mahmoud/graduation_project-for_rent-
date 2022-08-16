import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { AdvertismentService } from '../shared/services/advertisment.service';
import { HttpClient } from '@angular/common/http';
interface City {
  id: number;
  name: string;
}
interface BedsNumber {
  value: number;
  viewValue: number;
}

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

   allLocations:any;
   allTypes:any;
   bedsNumber:any;
   location:any;
   type:any;
   beds:any;
  


 
  constructor(private advertismentService:AdvertismentService ,private http: HttpClient) { }

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
  
//   getAllLocations(){
//     this.advertismentService.getAllLocations().subscribe((res)=>{
//      this.allLocations=res.city_choices;
//   })

// }
  
// getAllTypes(){
//   this.advertismentService.getAllTypes().subscribe((res)=>{
//    this.allTypes=res.type_choices;
// })
// }


// getBedsNumber(){
//   this.advertismentService.getBedsNumber().subscribe((res)=>{
//     this.bedsNumber=res.bedroom_number_choices;

// }) 


// }


getFilterLocation(event:MatSelectChange){
  this.location=event.value;
}

getFilterType(event:MatSelectChange){
  this.type=event.value;

}
getFilterBeds(event:MatSelectChange){
    this.beds=event.value;

}

 getBySearch() { 

   this.advertismentService.getBySearch({"city_id": this.location || " ", "bedroom_num": this.beds || " " ,"type":this.type || " "} ).subscribe((res)=>{
  console.log(res);
  console.log(this.location ,this.beds ,this.type)
}) 
 }

 deleteFilter(){
    this.location=null;

    this.beds=null
    this.type=null
  let remove=  document.getElementById("eman");


 }


 cities: City[]= [
  {
      "id": 1,
      "name": "القاهره",
     
  },
  {
      "id": 2,
      "name": "الجيزه",
     
  },
  {
      "id": 3,
      "name": "الاسكندريه",
     
  },
  {
      "id": 4,
      "name": "الدقهليه",
     
  },
  {
      "id": 5,
      "name": "الشرقيه",
     
  },
  {
      "id": 6,
      "name": "المنوفيه",
     
  },
  {
      "id": 7,
      "name": "القلبوبيه",
     
  },
  {
      "id": 8,
      "name": "البحيره",
     
  },
  {
      "id": 9,
      "name": "الغربيه",
     
  },
  {
      "id": 10,
      "name": "بورسعيد",
     
  },
  {
      "id": 11,
      "name": "دمياط",
     
  },
  {
      "id":12,
      "name": "الاسماعليه",
     
  },
  {
      "id": 13,
      "name": "السويس",
     
  },
  {
      "id": 14,
      "name": "كفرالشيخ",
     
  },
  {
      "id": 15,
      "name": "الفيوم",
     
  },
  {
      "id": 16,
      "name": "بني سويف",
     
  },
  {
      "id": 17,
      "name": "مطروح",
     
  },
  {
      "id": 18,
      "name": "شمال سيناء",
     
  },
  {
      "id": 19,
      "name": "جنوب سيناء",
     
  },
  {
      "id": 20,
      "name": "المنيا",
     
  },
  {
      "id": 21,
      "name": "اسيوط",
     
  },
  {
      "id": 22,
      "name": "سوهاج",
     
  },
  {
      "id": 23,
      "name": "قنا",
     
  },
  {
      "id": 24,
      "name": "البحر الاحمر",
     
  },
  {
      "id": 25,
      "name": "الاقصر",
     
  },
  {
      "id": 26,
      "name": "اسوان",
     
  },
  {
      "id": 27,
      "name": "الواحات",
     
  },
  {
      "id": 28,
      "name": "الوادي الجديد",
     
  }
];



}
