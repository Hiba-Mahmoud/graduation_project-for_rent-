
import { AuthService } from './../../service/auth.service';
import { TokenService } from './../../service/token.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../classesAndinterfaces/registerationData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
      email:['',[Validators.required,Validators.email, Validators.minLength(7), Validators.maxLength(40)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),]],
      rememberMe:[],
    })
  }

  login() {
    //  console.log(this.loginForm.value)


    this.user.email = this.loginForm.value.email
    this.user.password = this.loginForm.value.password



    return this.http.post('http://127.0.0.1:8000/api/login', this.user).subscribe(
      (response: any) =>{



        if(response.user.email_verified_at == null){
          this.router.navigateByUrl('/mailverifiy')

        }else{
        console.log(response.authorisation.token);

        //session or localstorage store token
        if(this.ischecked){
          this.token.settokenInlocalstorage(response.authorisation.token)
        }else{
          this.token.handeltoken(response.authorisation.token);
        }

        //navigate
        if(response.user.type =='owner'){
          localStorage.setItem('role',response.user.type);
          localStorage.setItem('image',response.user.image);
          localStorage.setItem('name',response.user.name);
          localStorage.setItem('id',response.user.id);


          this.router.navigate(['/owner']);

        }else if(response.user.type =='renter'){
          localStorage.setItem('role',response.user.type);
          localStorage.setItem('image',response.user.image);
          localStorage.setItem('name',response.user.name);
          localStorage.setItem('id',response.user.id);

          this.router.navigate(['/renter']);

        }else if (response.user.type =='admin'){
          localStorage.setItem('role',response.user.type);
          localStorage.setItem('image',response.user.image);
          localStorage.setItem('name',response.user.name);
          localStorage.setItem('id',response.user.id);

          this.router.navigate(['/adminhome']);

        }else{
          localStorage.setItem('role',response.user.type);
          localStorage.setItem('image',response.user.image);
          localStorage.setItem('name',response.user.name);
          localStorage.setItem('id',response.user.id);

          this.router.navigate(['/adminhome']);

        }
          // this.router.navigateByUrl('/home');
        }
      },
      (error: any) => {
        this.errMsg = error;
        // console.log(this.errMsg)

        if(this.errMsg.error.error.email){
          this.emailerror= this.errMsg.error.error.email;

        };
        if(this.errMsg.error.error.password){
          this.passwoderror = this.errMsg.error.error.password;

        };

        // console.log(this.errMsg);

      }
    )


  }

 onclick(event:any){
  if(event.target.checked){
    this.ischecked=true;
  }



 }

}
