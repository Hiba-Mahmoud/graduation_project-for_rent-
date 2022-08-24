import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MoaveDataService } from '../../service/moave-data.service';
import { confirmMailCode } from '../../classesAndinterfaces/confirmMailCode';
import { TokenService } from '../../service/token.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-mail-confirm',
  templateUrl: './mail-confirm.component.html',
  styleUrls: ['./mail-confirm.component.css']
})
export class MailConfirmComponent implements OnInit {
  confirmCode:FormGroup;
  succmessage:string;
  code=new confirmMailCode ;
  userId:number;
  errMsg: any;
  err:any;

  constructor(private auth:AuthService,private fb:FormBuilder,private http:HttpClient , private moveData:MoaveDataService,private router:Router,private Token:TokenService) { }

  ngOnInit(): void {
    this.succmessage=this.moveData.getmyMethodSubject();
    // document.getElementById('succ').textContent = this.succmessage
    console.log('from mail comp'+this.moveData.getId())
    this.userId = this.moveData.getId();
    this.confirmCode = this .fb.group({
      token : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('^[0-9]+$')]]

    })
  }
  onsubmit(){
    let confirmmailCode= this.code;
    confirmmailCode.id=Number(this.Token.getId());
    confirmmailCode.token=this.confirmCode.value.token;
    console.log(confirmmailCode);

    return this.http.post('http://127.0.0.1:8000/api/verify',confirmmailCode).subscribe({
      next:(succ:any)=>{
      // this.userId= succ.user.id;
      if(succ.success){
      this.Token.handeltoken(succ.token);

      if(succ.user.type =='owner'){
        localStorage.setItem('role',succ.user.type);
        localStorage.setItem('image',succ.user.image);
        localStorage.setItem('name',succ.user.name);
        localStorage.setItem('id',succ.user.id);


        this.router.navigate(['/owner']);

      }else if(succ.user.type =='renter'){
        localStorage.setItem('role',succ.user.type);
        localStorage.setItem('image',succ.user.image);
        localStorage.setItem('name',succ.user.name);
        localStorage.setItem('id',succ.user.id);

        this.router.navigate(['/payed-for-user']);

      }else if (succ.user.type =='admin'){
        localStorage.setItem('role',succ.user.type);
        localStorage.setItem('image',succ.user.image);
        localStorage.setItem('name',succ.user.name);
        localStorage.setItem('id',succ.user.id);

        this.router.navigate(['/adminhome']);

      }else{
        localStorage.setItem('role',succ.user.type);
        localStorage.setItem('image',succ.user.image);
        localStorage.setItem('name',succ.user.name);
        localStorage.setItem('id',succ.user.id);

        this.router.navigate(['/adminhome']);

      }

  }else{


    document.getElementById('code').textContent = succ.message;
  }

    },
    error:(error:HttpErrorResponse)=>{
      this.errMsg= error.error['error'];

      // document.getElementById('code').textContent = this.errMsg
      this.err = this.errMsg
            console.log("errorsssssssss", this.errMsg
            )
    }
  })
  }

}
