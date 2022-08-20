import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/auth/service/token.service';
import { IUser } from 'src/app/auth/classesAndinterfaces/registerationData';
import { registerationData } from 'src/app/auth/classesAndinterfaces/postregisterationdata';
import { MoaveDataService } from 'src/app/auth/service/moave-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  registeration:FormGroup;
  user=new IUser;
  postData = new registerationData;
  errMsg:any;
  // userData:returnDatafromReisteration;
  userData:any;
  invalidForm:any;
  validation:any;
  constructor(private localstorage:TokenService,private moveData:MoaveDataService,private fb:FormBuilder,private router:Router,private http:HttpClient) {
  }

  ngOnInit(): void {
    this.registeration = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('^[A-Za-z][A-Za-z]*$')]],
      lastName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('^[A-Za-z][A-Za-z]*$')]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.minLength(11),Validators.maxLength(11)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$' )]],
      gender:['',[Validators.required]],
      type:['',[Validators.required]]
    })
      this.invalidForm=this.registeration.status;
    }

    sign_up():void{
      this.validation=this.invalidForm;
    this.user.firstName =this.registeration.value.firstName
    this.user.lastName =this.registeration.value.lastName
    this.user.name = this.user.getFullName();
    this.postData.name= this.user.getFullName();
    this.postData.email=this.registeration.value.email;
    this.postData.type=this.registeration.value.type;
    this.postData.phone=this.registeration.value.phone;
    this.postData.gender=this.registeration.value.gender;
    this.postData.password=this.registeration.value.password;
    this.postData.password_confirmation=this.registeration.value.password;
    // console.log("POST DATAAAAA"+this.postData);


    this.http.post('http://127.0.0.1:8000/api/admin/addAdmin',this.postData).subscribe((succ:any)=>{
      console.log(succ)
    this.userData = succ.user.id;
      this.localstorage.handelId(this.userData.toString())
      this.moveData.setUserID(this.userData);
      this.localstorage.setToken(this.userData.token);
      this.router.navigateByUrl('/adminhome');

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
      if(this.errMsg.password)

      document.getElementById('password').textContent = this.errMsg.password
      document.getElementById('email').textContent = this.errMsg.email
            console.log("errorsssssssss", this.errMsg
            )
    })

  }






  onsubmit(){
//  this.router.navigate(['/mailverifiy'])
  }

}
