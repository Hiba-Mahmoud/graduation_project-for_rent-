import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { IUser } from '../../classesAndinterfaces/registerationData';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {



  loginForm:FormGroup;
  user = new IUser;
  errMsg:any;
  userId: any;
  emailerror:any;
  passwoderror:any;
  ischecked:boolean;
  passwordNotMatch:boolean=false;

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private token:TokenService,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$')]],
      password_confirmation:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$')]],
    })

  }
  submit(){
  if(this.loginForm.value.password != this.loginForm.value.password_confirmation){
    this.passwordNotMatch = true
    console.log('llllllllllllll')
  }


  console.log(this.passwordNotMatch)

}




}

