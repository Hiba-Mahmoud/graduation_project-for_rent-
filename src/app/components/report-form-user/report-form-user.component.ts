import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-form-user',
  templateUrl: './report-form-user.component.html',
  styleUrls: ['./report-form-user.component.css']
})
export class ReportFormUserComponent implements OnInit {
  form: FormGroup;
  errMsg:any;

  constructor(public fb: FormBuilder, private http: HttpClient , private rout:Router) {
    // this.form = this.fb.group({
    //   name: [''],
    //   email: [''],
    //   phone: [''],
    //   url: [''],
    //   description: [''],
    //   avatar1: [null],
    //   avatar2: [null],
    // });
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[\u0621-\u064A]+')]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.minLength(11),Validators.maxLength(11)]],
      url: ['',[Validators.required]],
      description: ['',[Validators.required]],
      avatar1: [null],
      avatar2: [null],
    });
  }

  uploadFile1(event) {
    const file1 = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar1: file1,
    });
    this.form.get('avatar1').updateValueAndValidity();
    console.log("avatar1 first image is : " , this.form.get('avatar1').value );
  }

  uploadFile2(event) {
    const file2 = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar2: file2,
    });
    this.form.get('avatar2').updateValueAndValidity();
    console.log("avatar2 second image is : " , this.form.get('avatar2').value );
  }
  

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('phone', this.form.get('phone').value);
    formData.append('url', this.form.get('url').value);
    formData.append('description', this.form.get('description').value);
    formData.append('image[0]', this.form.get('avatar1').value);
    formData.append('image[1]', this.form.get('avatar2').value);
    
    this.http
      .post('http://127.0.0.1:8000/api/contactUs/store', formData)
      .subscribe((succ:any)=>{
        console.log("process is = " , succ);
        if(window.confirm('شكرا .. لقد تمت اضافة الشكوى الخاصة بكم')){
          //put your delete method logic here
          this.rout.navigate(['/home']);
         }
  
      },(error:HttpErrorResponse)=>{
  
        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name
       }
        if(this.errMsg.email)
  
        document.getElementById('email').textContent = this.errMsg.email
        if(this.errMsg.phone)
  
        document.getElementById('phone').textContent = this.errMsg.phone
        if(this.errMsg.description)
  
        document.getElementById('description').textContent = this.errMsg.description
              console.log("errorsssssssss", this.errMsg
              )
      })
  
      // .subscribe({
      //   next: (response) => console.log(response),
      //   error: (error) => console.log(error),
      // });
  }

  

}
