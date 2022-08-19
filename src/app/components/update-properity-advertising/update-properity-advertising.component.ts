import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { OwnerService } from 'src/app/services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/auth/service/token.service';

@Component({
  selector: 'app-update-properity-advertising',
  templateUrl: './update-properity-advertising.component.html',
  styleUrls: ['./update-properity-advertising.component.css']
})
export class UpdateProperityAdvertisingComponent implements OnInit {
id:any;
addproperity:FormGroup;
token:string;
cities :any;
image_name=[];
data=new FormData();
advertisment:any;
errorMsg:any;
imageerror=[];
statuserror:any;
// filldata:any;


constructor(private activeroute:ActivatedRoute,private owner:OwnerService ,private http:HttpClient,private formb:FormBuilder,private router:Router,private localstorage:TokenService) {
  this.id= this.activeroute.snapshot.paramMap.get('id')
}

ngOnInit(): void {
  console.log('id'+this.id)
  // this.filldata=this.formb.group({});
  //cities
  let cities='http://127.0.0.1:8000/api/cities';
  this.owner.getcities(cities).subscribe((response:any)=>{
    console.log(response)
    this.cities=response.cities
    console.log(this.cities[0].id)
  },(error)=>{
    console.log(error)

  });
    //validation
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
      status:['',[Validators.required]],
      governate:['',[Validators.required]],
      address:['',[Validators.required,Validators.pattern('^[\u0621-\u064A0-9 ]+$')]],
      file:['',[Validators.required]]
    })
    // advertisment data
    console.log(this.id)
    this.owner.getadvertismentdetails('http://127.0.0.1:8000/api/edit/advertisement/',this.id).subscribe(res=>{
      this.advertisment=res.advertisement[0]
      console.log(this.advertisment)
      this.addproperity.patchValue({
        title: this.advertisment.title,
        description: this.advertisment.description,
        price:this.advertisment.price,
        level:this.advertisment.level,
        bedroomnum:this.advertisment.bedroom_num,
        bathroomnum:this.advertisment.bathroom_num,
        area:this.advertisment.area,
        furniture:this.advertisment.furniture,
        type:this.advertisment.type,
        governate:this.advertisment.city_id,
        address:this.advertisment.address,
        file:this.advertisment.advertisement_image,
      })

    },
    error=>{
      console.log(error)
    })

    // this.http.get('http://127.0.0.1:8000/api/show/advertisement/2').subscribe(res=>{
    //   console.log(res);
    //   this.advertisment=res.advertisement[0]
    // this.addproperity.patchValue({
    //         title: this.advertisment.title,
    //         description: this.advertisment.description,
    //         price:this.advertisment.price,
    //         level:this.advertisment.level,
    //         bedroomnum:this.advertisment.bedroom_num,
    //         bathroomnum:this.advertisment.bathroom_num,
    //         area:this.advertisment.area,
    //         furniture:this.advertisment.furniture,
    //         type:this.advertisment.type,
    //         governate:this.advertisment.city_id,
    //         address:this.advertisment.address,
    //         file:this.advertisment.advertisement_image,
    //       })
    // },
    // error=>{
    //   console.log(error)
    // })


  }

  //images
  // data=new FormData();

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
// console.log('array'+this.image_name)


}

  //send data
  onsubmit(){
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
    this.data.append('status',this.addproperity.value.status) ;


    // this.addata.image_name= this.image_name;
    // console.log(this.addata)
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
    let id=this.advertisment.id
    console.log(this.data)
    console.log(id)
    this.http.post('http://127.0.0.1:8000/api/advertisement/'+id,this.data,{headers:headers}).subscribe((response:any)=>{
      console.log(response)
      this.router.navigateByUrl('/owner')
    },(error:HttpErrorResponse)=>{
      console.log(error)
//       image_name: ['بجب ان تدخل صوره الاعلان هذا الحقل مطلوب ']
// status:
this.errorMsg= error.error;
this.imageerror = this.errorMsg?.image_name
console.log(this.errorMsg?.image_name[0])
this.statuserror =  this.errorMsg.status


    })

  }
}


