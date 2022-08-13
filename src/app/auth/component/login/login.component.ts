import { AuthService } from './../../service/auth.service';
import { TokenService } from './../../service/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private token:TokenService,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email, Validators.minLength(7), Validators.maxLength(40)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),]]
    })
  }

   login() {


    this.user.email = this.loginForm.value.email
    this.user.password = this.loginForm.value.password


    return this.http.post('http://127.0.0.1:8000/api/login', this.user).subscribe(
      (response: any) =>{

        this.userId = response.user.id;
        console.log(this.userId)
        this.token.handelId(this.userId.toString());

        if(response.user.email_verified_at == null){
          this.router.navigateByUrl('/mailverifiy')

        }else{
        console.log(response.authorisation.token);
        this.token.handeltoken(response.authorisation.token);
        if(response.user.type =='owner'){
          this.router.navigate(['/owner']);

        }else if(response.user.type =='renter'){
          this.router.navigate(['/']);

        }else if (response.user.type =='admin'){
          this.router.navigate(['/adminhome']);

        }else{
          this.router.navigate(['/adminhome']);

        }
          // this.router.navigateByUrl('/home');
        }
      },
      (error: any) => {
        this.errMsg = error;
        ;
        if(this.errMsg.error.error.email){
          document.getElementById('emailerror').textContent = this.errMsg.error.error.email;

        };
        if(this.errMsg.error.error.password){
          document.getElementById('passwoderror').textContent = this.errMsg.error.error.password;

        };

        console.log(this.errMsg);

      }
    )


  }


}
