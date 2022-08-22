import { Component, OnInit } from '@angular/core';
import { FavouritService } from './services/favourit.service';

@Component({
  selector: 'app-favourits',
  templateUrl: './favourits.component.html',
  styleUrls: ['./favourits.component.css']
})
export class FavouritsComponent implements OnInit {
  data : any =[];
  adv : any =[];
  page: number = 1;
  totalNumber: any;

  // i=0;
  constructor(private fav:FavouritService) { 
    this.getFavData();
  }

  getFavData(){
    this.fav.getFavourits().subscribe(res=>{
      console.log("res is = ");
      console.log(res);
      this.data=res;
      this.adv=this.data.data;
      console.log("adv is = ");
      console.log(this.adv);
      this.totalNumber = this.adv.length;
    });
   }

  ngOnInit(): void {
  }

}
