import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpersonaldata',
  templateUrl: './editpersonaldata.component.html',
  styleUrls: ['./editpersonaldata.component.css']
})
export class EditpersonaldataComponent implements OnInit {
  
  form: FormGroup;
  errMsg : any=[];
  constructor(public fb: FormBuilder, private http: HttpClient ,private router:Router) {
   //private fb:FormBuilder,private router:Router,private http:HttpClient
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['' , [Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[\u0621-\u064A]+')] ],
      phone:['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.minLength(11),Validators.maxLength(11)]],
     
    });
  }

 

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('phone', this.form.get('phone').value);
   
    this.http
      .post('http://127.0.0.1:8000/api/profile_setting_name_phone', formData)
      .subscribe((succ:any)=>{
        console.log("process is = " , succ);
        // if(window.confirm(' ')){
        //   //put your delete method logic here
        //   this.router.navigate(['/adminhome']);
        //  }

      },(error:HttpErrorResponse)=>{

        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name;  
        }
        if(this.errMsg.jobTitle){
          document.getElementById('phone').textContent = this.errMsg.phone;  
        }
       
      });
  }

}
