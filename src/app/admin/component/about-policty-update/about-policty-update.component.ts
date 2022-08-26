import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { read } from '@popperjs/core';
import { OwnerService } from 'src/app/services/owner.service';


@Component({
  selector: 'app-about-policty-update',
  templateUrl: './about-policty-update.component.html',
  styleUrls: ['./about-policty-update.component.css']
})
export class AboutPolictyUpdateComponent implements OnInit {

  form: FormGroup;
  errMsg : any=[];
  shared_id ;
  isvalid=false;
  invalidForm:any;  
  formData = new FormData();
  id:any;
  about:any;
  imageOne:any;
  dataall=new FormData();
  images:FormGroup;
  constructor(public fb: FormBuilder,
    private formb:FormBuilder,
     private http: HttpClient ,
     private router:Router ,
     private owner: OwnerService,
     private routeAct:ActivatedRoute) {  }

  ngOnInit(): void {
    this.routeAct.queryParams.subscribe((params : any) =>{
      console.log("params = " , params);
      this.shared_id=params.data;
      console.log("this.shared_id = " , this.shared_id)
    })
    this.form = this.fb.group({
      title: ['' , [Validators.required,Validators.minLength(10),Validators.maxLength(300),
      Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\.]*$')] ],
      description: ['' ,[
        Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\.]*$')] ],
        avatar1: [null],
    });
    this.invalidForm=this.form.status;
    this.getalldata();
    this.images = this.formb.group({ image:[''], })
  }

  // uploadFile1(event) {
  //   const file1 = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({
  //     avatar1: file1,
  //   });
  //   this.form.get('avatar1').updateValueAndValidity();
  //   console.log("avatar1 first image is : " , this.form.get('avatar1').value );
  // }



// -----------------------------------------------------------
  onFileChange(event:any) {
    console.log(event);    
    if (event.target.files && event.target.files[0])
     {      
        let imagename = event.target.files[0];
        console.log(imagename);
        if (imagename) 
        {
          this.formData.append('image', imagename, imagename.name)
          console.log(imagename.name+'dataaaaaa')
        }
        var reader = new FileReader();      
    }
    let Id = this.about.id
    console.log(Id+'الصوررررررررررررر')
    this.http.post('http://127.0.0.1:8000/api/update/about/image/'+Id , this.formData).
    subscribe({
      next:(response: any) => {
      console.log(response)
      this.getalldata();
    },error:(error: HttpErrorResponse) => {
      console.log(error)
    }
    })  
  }
  // ---------------------------------------------------------------------
  submitForm() {    
    console.log(this.isvalid)
      if(this.form.status === "INVALID"){
        console.log('hello')
        this.isvalid = true;
        console.log("this.isvalid = ",this.isvalid)
      }
    else{
    var formData: any = new FormData();
    formData.append('title', this.form.get('title').value);
    formData.append('description', this.form.get('description').value);
    this.http
      .post('http://127.0.0.1:8000/api/admin/about/update/'+this.shared_id, formData)
      .subscribe((succ:any)=>{
        console.log("process is = " , succ);
        alert("تم التعديل بنجاح");
          this.router.navigate(['/adminhome']);
      }
      );
  }
}
  getalldata(){
    this.owner.getadvertismentdetails('http://127.0.0.1:8000/api/edit/about/', this.shared_id)
    . subscribe({
      next:(res => {
      console.log(res.data)
      this.about = res.data
    this.form.patchValue({
        title: this.about.title,
        description: this.about.description,
        image: this.about.image
      })
   
      })
    })
  }
  // ---------------------------------------------------------------------

}