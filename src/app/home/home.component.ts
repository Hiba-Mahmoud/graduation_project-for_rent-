import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { AdvertismentService } from '../shared/services/advertisment.service';
import { HttpClient } from '@angular/common/http';

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
    totalNumber: any;
    page: number = 1;
    loading: boolean = true;
    allLocations: any;
    allTypes: any;
    bedsNumber: any;
    location: any;
    type: any;
    beds: any;




    constructor(private advertismentService: AdvertismentService, private http: HttpClient) { }

    ngOnInit(): void {

        this.getAll();
        this.getAllLocations();
    }

    getAll() {
        this.advertismentService.getAll("http://127.0.0.1:8000/api/Home").subscribe((res) => {
            // console.log(res.allAdvertisements);
            this.allAdvert = res.allAdvertisements;
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

        this.advertismentService.getBySearch({ "city_id": this.location || " ", "bedroom_num": this.beds || " ", "type": this.type || " " }).subscribe((res) => {
            // console.log(res);
            // console.log(this.location, this.beds, this.type);
            this.allAdvert = res;
            this.totalNumber=res.length; 
            console.log(this.allAdvert);
            console.log(this.totalNumber);

        })
    }






}