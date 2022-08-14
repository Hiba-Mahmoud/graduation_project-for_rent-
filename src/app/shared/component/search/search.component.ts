import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { AdvertismentService } from '../../services/advertisment.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  allLocations:any;
  allTypes:any;
  bedsNumber:any;
  constructor(private _formBuilder: FormBuilder ,private advertismentService:AdvertismentService)  { }

  ngOnInit(): void {
    this.getAllLocations();
    this.getAllTypes();
    this.getBedsNumber();
  
  }
  getAllLocations(){
    this.advertismentService.getAllLocations().subscribe((res)=>{
     this.allLocations=res.city_choices;
  })
}

  
getAllTypes(){
  this.advertismentService.getAllTypes().subscribe((res)=>{
   this.allTypes=res.type_choices;
})
}


getBedsNumber(){
  this.advertismentService.getBedsNumber().subscribe((res)=>{
    this.bedsNumber=res.bedroom_number_choices;

}) 


}


}