import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../classesAndinterfaces/registerationData';
import { AuthService } from '../../service/auth.service';
import { ResetPasswordService } from '../../service/reset-password.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-mailwithcode',
  templateUrl: './mailwithcode.component.html',
  styleUrls: ['./mailwithcode.component.css']
})
export class MailwithcodeComponent implements OnInit {

  loginForm:FormGroup;
  veryfiy = new IUser;
  errMsg:any;
  userId: any;
  emailerror:any;
  passwoderror:any;
  ischecked:boolean;
  servermsg:string;

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private token:TokenService,private auth:AuthService ,private reset:ResetPasswordService ) { }

  ngOnInit(): void {
    this.servermsg = this.reset.getResetpswordresponseMsg();
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email, Validators.minLength(7), Validators.maxLength(40)]],
      code:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('^[0-9]+$')]],

    })
  }

  submit(){
    this.veryfiy.email=this.loginForm.value.email;
    this.veryfiy.code=this.loginForm.value.code;

    //sending data
    return this.http.post('http://127.0.0.1:8000/api/password/verify',this.veryfiy).subscribe((response)=>{
      console.log(response['code'])
      this.reset.setResetpswordresponseMsg(response['message']);
      this.reset.setcode(response['code'])
      this.reset.setemail(response['data']['email']);
      console.log(response['data']['email'])
      this.router.navigateByUrl('/password')
      console.log(response)

    },
    (error)=>{
      console.log(error)

    })


  }

}
