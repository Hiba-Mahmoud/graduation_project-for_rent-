import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about-policty-update',
  templateUrl: './about-policty-update.component.html',
  styleUrls: ['./about-policty-update.component.css']
})
export class AboutPolictyUpdateComponent implements OnInit {

  form: FormGroup;
  errMsg : any=[];
  shared_id ;
  isvalid=false;
  invalidForm:any;
  constructor(public fb: FormBuilder, private http: HttpClient ,private router:Router ,private routeAct:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.routeAct.queryParams.subscribe((params : any) =>{
      console.log("params = " , params);
      this.shared_id=params.data;
      console.log("this.shared_id = " , this.shared_id)
    })
    this.form = this.fb.group({
      title: ['' , [Validators.required,Validators.minLength(10),Validators.maxLength(300),
      Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\.]*$')] ],
      description: ['' ,[Validators.required,Validators.minLength(15),Validators.maxLength(50),
        Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\.]*$')] ],
        avatar1: [null],
    });
    this.invalidForm=this.form.status;

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
    console.log(this.isvalid)
      if(this.form.status === "INVALID"){
        console.log('hello')
        this.isvalid = true;
        console.log("this.isvalid = ",this.isvalid)
      }
    else{
    var formData: any = new FormData();
    formData.append('title', this.form.get('title').value);
    formData.append('description', this.form.get('description').value);
    formData.append('image', this.form.get('avatar1').value);
    this.http
      .post('http://127.0.0.1:8000/api/admin/about/update/'+this.shared_id, formData)
      .subscribe((succ:any)=>{
        console.log("process is = " , succ);
        if(window.confirm('لقد تم التعديل الخاص بكم')){
          //put your delete method logic here
          this.router.navigate(['/adminhome']);
         }
      }
      );
  }
}
}