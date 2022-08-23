import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-member-update',
  templateUrl: './team-member-update.component.html',
  styleUrls: ['./team-member-update.component.css']
})
export class TeamMemberUpdateComponent implements OnInit {

  form: FormGroup;
  errMsg : any=[];
  constructor(public fb: FormBuilder, private http: HttpClient ,private router:Router) {
   //private fb:FormBuilder,private router:Router,private http:HttpClient
  }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['' , [Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[\u0621-\u064A]+')] ],
      jobTitle: ['' ,[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('[\u0621-\u064A]+')]],
      avatar1: [null],
    });
  }

  uploadFile1(event) {
    const file1 = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar1: file1,
    });
    this.form.get('avatar1').updateValueAndValidity();
    console.log("avatar1 first image is : " , this.form.get('avatar1').value );
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('jobTitle', this.form.get('jobTitle').value);
    formData.append('image', this.form.get('avatar1').value);
    this.http
      .post('http://127.0.0.1:8000/api/admin/team/update/', formData)
      .subscribe((succ:any)=>{
        console.log("process is = " , succ);
        if(window.confirm('لقد تم اضافة عضو جديد بالفريق الخاص بكم')){
          //put your delete method logic here
          this.router.navigate(['/adminhome']);
         }

      },(error:HttpErrorResponse)=>{

        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name;  
        }
        if(this.errMsg.jobTitle){
          document.getElementById('jobTitle').textContent = this.errMsg.jobTitle;  
        }
       
      });
  }

}