import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { resetPassword } from '../classesAndinterfaces/resetPassword';
import { ResetPasswordService } from '../service/reset-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword:FormGroup;
  valueOfEmail=new resetPassword;
  erorMsg:any;
  mail:any;
  constructor(private router:Router,private http:HttpClient,private fb:FormBuilder,private Passwd:ResetPasswordService) { }

  ngOnInit(): void {
    this.erorMsg='';
    this.forgetpassword =this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  //send email to server
  sendEmail(){
    this.valueOfEmail.email = this.forgetpassword.value.email;
    console.log(this.valueOfEmail);

    return this.http.post('http://127.0.0.1:8000/api/password/email',this.valueOfEmail).subscribe((response:any)=>{
      console.log(response.message);
      this.Passwd.setResetpswordresponseMsg(response.message);
      this.router.navigateByUrl('/reset-password-code')

    },
    (error)=>{
      this.erorMsg=error;
      if(this.erorMsg){

        this.mail=this.erorMsg.error.message
        // document.getElementById('mailerror').innerText=this.erorMsg
      };
      console.log(this.mail);

    })

  }

}
