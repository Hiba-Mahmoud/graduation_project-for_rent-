import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { read } from '@popperjs/core';

@Component({
  selector: 'app-follow-links-update',
  templateUrl: './follow-links-update.component.html',
  styleUrls: ['./follow-links-update.component.css']
})
export class FollowLinksUpdateComponent implements OnInit {
  form: FormGroup;
  errMsg : any=[];
  shared_id:number;
  isvalid=false;
  invalidForm:any;
  links:any;
  images:FormGroup;  
  formData = new FormData();
  id:any;
  about:any
  imageOne:any;
  dataall=new FormData();

  constructor(public fb: FormBuilder,
    private formb:FormBuilder,
     private http: HttpClient ,
     private router:Router,
     private routAct:ActivatedRoute ,
     private owner:OwnerService) {
  }

  
  ngOnInit(): void {
    this.routAct.queryParams.subscribe((params : any) =>{
      console.log("params = " , params);
      this.shared_id=params.data;
      console.log("this.shared_id = " , this.shared_id)
    })
    this.form = this.fb.group({
      facebook: ['' , [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
      instagram: ['' ,[Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
      twitter: ['' ,[Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ],
      email: ['' ,[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$"),Validators.minLength(11),Validators.maxLength(11)]],
      avatar: [null],
    });
    this.getalldata();
    this.images = this.formb.group({ logo:[''], })
    this.invalidForm=this.form.status
  }  

  // ---------------------------------------------------------------------
  onFileChange(event:any) {
    console.log(event);    
    if (event.target.files && event.target.files[0])
     {      
        let imagename = event.target.files[0];
        console.log("imagename.name= ",imagename.name);
        console.log("imagename= ",imagename);
        if (imagename) 
        {
          this.formData.append('logo', imagename, imagename.name)
          console.log(imagename.name+'dataaaaaa')
        }
        var reader = new FileReader();      
    }
    let id = this.links.id
    console.log(id+'الصوررررررررررررر')
    this.http.post('http://127.0.0.1:8000/api/update/follow/image/'+id , this.formData).
    subscribe({
      next:(response: any) => {
      console.log(response)
      this.getalldata();
    },error:(error: HttpErrorResponse) => {
      console.log(error)
    }
    })  
  }
  // ---------------------------------------------------------------------  
  submitForm() {
    console.log("this.isvalid before if= ",this.isvalid)
      if(this.form.status === "INVALID"){
        console.log('hello')
        this.isvalid = true;
        console.log(this.form.status , "INVALID")
      }
    else{
      // var formData: any = new FormData();
      this.formData.append('facebook', this.form.get('facebook').value);
      this.formData.append('instagram', this.form.get('instagram').value);
      this.formData.append('twitter', this.form.get('twitter').value);
      this.formData.append('email', this.form.get('email').value);
      this.formData.append('phone', this.form.get('phone').value);
      this.http
        .post('http://127.0.0.1:8000/api/admin/follow_us/update/'+this.shared_id, this.formData)
        .subscribe((succ:any)=>{
          console.log("process is = " , succ);
            this.router.navigate(['/adminhome']);
        }
        );
    }
   
  }

  getalldata(){
    this.owner.getadvertismentdetails('http://127.0.0.1:8000/api/edit/followUs/', this.shared_id)
    . subscribe({
      next:(res => {
      console.log(res)
      this.links = res.data
    this.form.patchValue({
      facebook: this.links.facebook,
      instagram: this.links.instagram,
      twitter: this.links.twitter,
      email: this.links.email,
      phone: this.links.phone,
      logo: this.links.logo,
      })
   
      })
    })
  }

}
