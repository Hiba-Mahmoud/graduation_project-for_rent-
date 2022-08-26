import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {
  form: FormGroup;
  errMsg : any=[];
  isvalid = false;
  invalidForm:any;
  constructor(public fb: FormBuilder, private http: HttpClient ,private router:Router) {
   //private fb:FormBuilder,private router:Router,private http:HttpClient

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['' , [Validators.required,Validators.minLength(4),Validators.maxLength(20),
        Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\u06ff ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\u06ff]*$')] ],
      jobTitle: ['' ,[Validators.required,Validators.minLength(10),Validators.maxLength(40),
        Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\u06ff ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\u06ff]*$')]],
      avatar1: [null],
    });
    this.invalidForm = this.form.status;

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
    formData.append('name', this.form.get('name').value);
    formData.append('jobTitle', this.form.get('jobTitle').value);
    formData.append('image', this.form.get('avatar1').value);
    this.http
      .post('http://127.0.0.1:8000/api/admin/team/store', formData)
      .subscribe({
        next:
        (succ:any)=>{
        console.log("process is = " , succ);
        
          this.router.navigate(['/aboutForm']);
          alert('تمت الاضافه بنجاح');

      },
      error:
      (error:HttpErrorResponse)=>{

        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name;  
        }
        if(this.errMsg.jobTitle){
          document.getElementById('jobTitle').textContent = this.errMsg.jobTitle;  
        }
      }
      });
  }

  }
}
