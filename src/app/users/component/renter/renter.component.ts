import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { AdvertismentService } from 'src/app/shared/services/advertisment.service';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css']
})
export class RenterComponent implements OnInit {
  advertisment: any = [];
  totalNumber: any;
  page: number = 1;
  loading: boolean = true;
  allLocations: any;


  location: any;
    type: any;
    beds: any;
    public status = false;


     selected: boolean;
  selectedChange = new EventEmitter<boolean>();
  constructor(private advertismentService: AdvertismentService, private http: HttpClient) { }



  ngOnInit(): void {

      this.getAll();
      this.getAllLocations() ;

  }

  getAll() {
      this.advertismentService.getAll("http://127.0.0.1:8000/api/Home").subscribe((res) => {
           console.log(res.allAdvertisements);
          this.advertisment = res.allAdvertisements;
          this.totalNumber = res.allAdvertisements.length;
          this.loading = false;

      })
  }
  getAllLocations() {
    this.advertismentService.getAllLocations().subscribe((res) => {
         this.allLocations = res.cities;
        console.log(res);
    })

}

getFilterLocation(event: MatSelectChange) {
  this.location = event.value;
  
      this.getBySearch();
  


}

getFilterType(event: MatSelectChange) {
  this.type = event.value;
 
      this.getBySearch();

  


}
getFilterBeds(event: MatSelectChange) {
  this.beds = event.value;
  
      this.getBySearch();

  

}

getBySearch() {

  this.advertismentService.getBySearch({ "city_id": this.location || " " , "bedroom_num": this.beds || " ", "type": this.type || " " }).subscribe((res) => {
      // console.log(res);
      // console.log(this.location, this.beds, this.type);
      this.advertisment = res;
      this.totalNumber=res.length;

  })
}


toggleSelected(id:any) {
  this.selected = !this.selected;
  this.selectedChange.emit(this.selected);
  console.log(this.selected);
   
  this.advertismentService.favorite("http://127.0.0.1:8000/api/addFavourite/" ,id).subscribe((res) => {
           console.log(res);

  })

}

}
