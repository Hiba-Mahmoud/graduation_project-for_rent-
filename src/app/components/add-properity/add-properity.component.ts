// import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/auth/classesAndinterfaces/registerationData';
import { registerationData } from 'src/app/auth/classesAndinterfaces/postregisterationdata';
import { TokenService } from 'src/app/auth/service/token.service';
import { MoaveDataService } from 'src/app/auth/service/moave-data.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
import { Addadver } from 'src/app/interface/addadvertis';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-add-properity',
  templateUrl: './add-properity.component.html',
  styleUrls: ['./add-properity.component.css']
})
export class AddProperityComponent implements OnInit {
  addproperity:FormGroup;
  images:FormGroup;
  image_name=[];
  addata = new Addadver;
  token:string;
  user=new IUser;
  errMsg:any;
  cities :any;

  // userData:returnDatafromReisteration;
  userData:any;
  invalidForm:any;
  validation:any;
  isvalid =false;
  errormsg:any;
  titleError:any;

  constructor(private localstorage:TokenService,private router:Router,private http:HttpClient, private formb:FormBuilder,private owner:OwnerService) {



  }
  // ^[\u0621-\u064A0-9 ]+$
  ngOnInit(): void {
    let cities='http://127.0.0.1:8000/api/cities';
    this.owner.getcities(cities).subscribe((response:any)=>{
      console.log(response)
      this.cities=response.cities
      console.log(this.cities[0].id)
    },(error)=>{
      console.log(error)

    });


    // ------------------------------
    this.addproperity = this.formb.group({
      title:['',[Validators.required,Validators.minLength(10),Validators.maxLength(200),Validators.pattern('')]],
      description:['',[Validators.required,Validators.minLength(100),Validators.maxLength(1000),Validators.pattern('')]],
      price:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      level:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      bedroomnum:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      bathroomnum:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      bedsnum:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      area:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      furniture:['',[Validators.required]],
      type:['',[Validators.required]],
      governate:['',[Validators.required]],
      address:['',[Validators.required,Validators.pattern('')]],
      file:['',[Validators.required]]
    })
      this.invalidForm=this.addproperity.status;
    //  this.images=this.formb.group({
    //     file: ['',[Validators.required]],
    //     fileSource: new FormControl('', [Validators.required])
    //   })


    }



    data=new FormData();

    onFileChange(event:any){

  console.log(this.addproperity.value.file)
  console.log(event.target.files);
  console.log(event.target.files[0]['name']);
  if (event.target.files && event.target.files[0]) {
    var filesAmount = event.target.files.length;
    for (let i = 0; i < filesAmount; i++) {
      let imagename=event.target.files[i];
      console.log(imagename);
      this.data.append('image_name[]',imagename,imagename.name)
      // this.image_name.push(imagename);
      var reader = new FileReader();

            reader.onload = (event:any) => {
              // console.log(event.target.files +'fillllle');
              //  this.image_name.push(event.target.result);

              //  this.image_name.patchValue({
              //     fileSource: this.images
              //  });
            }

            // reader.readAsArrayBuffer(event.target.files[i]);
    }
}
console.log('array'+this.image_name)

}

onsubmit(){
  if(this.addproperity.status === "INVALID"){
    console.log('hello')
    this.isvalid = true;
    console.log(this.isvalid)
  }else{

    console.log(typeof(this.addproperity.value.price))
  this.data.append('title',this.addproperity.value.title) ;
  this.data.append('description',this.addproperity.value.description) ;
  this.data.append('address',this.addproperity.value.address) ;
  this.data.append('price',this.addproperity.value.price) ;
  this.data.append('bedroom_num',this.addproperity.value.bedroomnum) ;
  this.data.append('bathroom_num',this.addproperity.value.bathroomnum) ;
  this.data.append('beds_num',this.addproperity.value.bedsnum) ;
  this.data.append('level',this.addproperity.value.level) ;
  this.data.append('furniture',this.addproperity.value.furniture) ;
  this.data.append('type',this.addproperity.value.type) ;
  this.data.append('area',this.addproperity.value.area) ;
  this.data.append('city_id',this.addproperity.value.governate) ;

  this.addata.image_name= this.image_name;
  console.log(this.addata)
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

  this.http.post('http://127.0.0.1:8000/api/advertisement',this.data,{headers:headers}).subscribe((response:any)=>{
    console.log(response)
    this.router.navigateByUrl('/owner')
  },(error:HttpErrorResponse)=>{
    console.log(error)
    this.errormsg = error.error.error
    this.titleError=this.errormsg.title[0]
    console.log(this.errormsg)
    console.log(this.titleError)

  })

}

  }
}



