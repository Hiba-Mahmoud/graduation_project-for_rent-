import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.css']
})
export class FollowUsComponent implements OnInit {
  form: FormGroup;
  errMsg : any=[];
  constructor(public fb: FormBuilder, private http: HttpClient ,private router:Router) {
   //private fb:FormBuilder,private router:Router,private http:HttpClient
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      facebook: ['' , [Validators.required] ],
      instagram: ['' ,[Validators.required]],
      twitter: ['' ,[Validators.required]],
      email: ['' ,[Validators.required]],
      phone: ['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.minLength(11),Validators.maxLength(11)]],
      avatar1: [null],
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

  
  submitForm() {
    var formData: any = new FormData();
    formData.append('facebook', this.form.get('facebook').value);
    formData.append('instagram', this.form.get('instagram').value);
    formData.append('twitter', this.form.get('twitter').value);
    formData.append('email', this.form.get('email').value);
    formData.append('phone', this.form.get('phone').value);
    formData.append('logo', this.form.get('avatar1').value);
    this.http
      .post('http://127.0.0.1:8000/api/admin/team/update/1', formData)
      .subscribe((succ:any)=>{
        console.log("process is = " , succ);
        // if(window.confirm('لقد تم اضافة عضو جديد بالفريق الخاص بكم')){
        //   //put your delete method logic here
          this.router.navigate(['/adminhome']);
        //  }

      }
      // ,(error:HttpErrorResponse)=>{

      //   this.errMsg= error.error['error'];
      //   console.log(this.errMsg)
      //   if(this.errMsg.name){
      //     document.getElementById('name').textContent = this.errMsg.name;  
      //   }
      //   if(this.errMsg.jobTitle){
      //     document.getElementById('jobTitle').textContent = this.errMsg.jobTitle;  
      //   }
       
      // }
      );
  }


}
