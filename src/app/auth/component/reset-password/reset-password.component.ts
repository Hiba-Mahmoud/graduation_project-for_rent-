import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private token:TokenService,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),]],
      passwordpassword_confirmation:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),]],
    })
  }
  submit()
{

}
}
