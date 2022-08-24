import { OwnerService } from './../../../services/owner.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpersonaldata',
  templateUrl: './editpersonaldata.component.html',
  styleUrls: ['./editpersonaldata.component.css']
})
export class EditpersonaldataComponent implements OnInit {

  form: FormGroup;
  errMsg: any;
  nameError: any;
  phoneError: any;
  data: any;
  first: any;
  type: any;


  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router, private user: OwnerService) {
    //private fb:FormBuilder,private router:Router,private http:HttpClient
  }

  ngOnInit(): void {
    this.getUserData();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\u06ff ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\u06ff]*$')]],
      phone: ['', [Validators.required, Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"), Validators.minLength(11), Validators.maxLength(11)]],

    });
  }


  getUserData() {
    this.user.getpendingCount('http://127.0.0.1:8000/api/profile_setting').subscribe({
      next: (response) => {
        console.log(response)
        this.data = response
        this.type=this.data.type

        console.log(this.type)
        this.form.patchValue({
          name: this.data.name,
          phone: this.data.phone

        })
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)

      }
    })
  }



  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('phone', this.form.get('phone').value);

    this.http
      .post('http://127.0.0.1:8000/api/profile_setting_name_phone', formData)
      .subscribe({
        next: (succ: any) => {
          console.log("process is = ", succ);


//navigate
if(this.type =='owner'){
  // localStorage.setItem('name',response.user.name);


  this.router.navigate(['/owner']);

}else if(this.type =='renter'){
  localStorage.setItem('role',this.type);
  // localStorage.setItem('name',response.user.name);

  this.router.navigate(['/renter']);

}else if (this.type =='admin'){
  // localStorage.setItem('name',response.user.name);

  this.router.navigate(['/adminhome']);

}else{
  // localStorage.setItem('name',response.user.name);

  this.router.navigate(['/adminhome']);

}








        }, error: (error: HttpErrorResponse) => {

          // console.log(error)
          this.errMsg = error.error.error;
          console.log(this.errMsg)
          if (this.errMsg.name) {
            this.nameError = this.errMsg.name[0];
            console.log(this.phoneError)
          }
          if (this.errMsg.phone) {
            this.phoneError = this.errMsg.phone[0];
            console.log(this.phoneError)
          }

        }
      });
  }

}
