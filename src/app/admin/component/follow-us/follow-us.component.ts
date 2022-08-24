import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.css']
})
export class FollowUsComponent implements OnInit {
  form: FormGroup;
  errMsg : any=[];
  shared_id:number;
  isvalid=false;
  invalidForm:any;
  constructor(public fb: FormBuilder,
     private http: HttpClient ,
     private router:Router,
     private routAct:ActivatedRoute) {
   //private fb:FormBuilder,private router:Router,private http:HttpClient
  }

  ngOnInit(): void {
    this.routAct.queryParams.subscribe((params : any) =>{
      console.log("params = " , params);
      this.shared_id=params.data;
      console.log("this.shared_id = " , this.shared_id)
    })
    this.form = this.fb.group({
      facebook: ['' , [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
      instagram: ['' ,[Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
      twitter: ['' ,[Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
      email: ['' ,[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.minLength(11),Validators.maxLength(11)]],
      avatar1: [null],
    });
    this.invalidForm=this.form.status;

  }  

  uploadFile1(event) {
    const file1 = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar1: file1,
    });
    this.form.get('avatar1').updateValueAndValidity();
    console.log("avatar1 first image is : " , this.form.get('avatar1').value );
  }

  
  submitForm() {
    console.log(this.isvalid)
      if(this.form.status === "INVALID"){
        console.log('hello')
        this.isvalid = true;
        console.log("this.isvalid = ",this.isvalid)
      }
    else{
      var formData: any = new FormData();
      formData.append('facebook', this.form.get('facebook').value);
      formData.append('instagram', this.form.get('instagram').value);
      formData.append('twitter', this.form.get('twitter').value);
      formData.append('email', this.form.get('email').value);
      formData.append('phone', this.form.get('phone').value);
      formData.append('logo', this.form.get('avatar1').value);    
      this.http
        .post('http://127.0.0.1:8000/api/admin/follow_us/update/'+this.shared_id, formData)
        .subscribe((succ:any)=>{
          console.log("process is = " , succ);
            this.router.navigate(['/adminhome']);
        }
        );
    }
   
  }


}
