import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { read } from '@popperjs/core';
import { map } from 'rxjs';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-team-member-update',
  templateUrl: './team-member-update.component.html',
  styleUrls: ['./team-member-update.component.css']
})
export class TeamMemberUpdateComponent implements OnInit {
  formData = new FormData();
  form: FormGroup;
  errMsg : any=[];
  id:any;
  team:any;
  imageOne:any;
  dataall=new FormData();
  images:FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient ,
    private router:Router,private activeroute: ActivatedRoute ,private owner: OwnerService,private formb:FormBuilder) {
    this.id = this.activeroute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['' , [Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\u06ff ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\u06ff]*$')] ],
      jobTitle: ['' ,[Validators.required,Validators.minLength(10),Validators.maxLength(40),Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\u06ff ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\u06ff]*$')]],
      image: [null],
    });
    this.getalldata();
    this.images = this.formb.group({

      image:[''],
    })
  }

  onFileChange(event:any) {

    console.log(event)
    
    if (event.target.files && event.target.files[0]) {
      
        let imagename = event.target.files[0];
        console.log(imagename);
        if (imagename) {
          this.formData.append('image', imagename, imagename.name)
          console.log(imagename.name+'dataaaaaa')
        }
        var reader = new FileReader();
      
    }

    let id = this.team.id
    console.log(id+'الصوررررررررررررر')
    this.http.post('http://127.0.0.1:8000/api/update/image/'+id , this.formData).
    subscribe({
      next:(response: any) => {

      console.log(response)
      this.getalldata();


    },error:(error: HttpErrorResponse) => {
      console.log(error)


    }
    })
  
  }

  
  submitForm() {

    this.formData.append('name', this.form.value.name);
    this.formData.append('jobTitle', this.form.value.jobTitle);
    let id=this.team.id;
    // console.log( formData.get('image'))
    this.http
      .post('http://127.0.0.1:8000/api/admin/team/update/'+ id,this.formData)
      . subscribe({
        next:(succ:any)=>{
        console.log("process is = " , succ);
          this.router.navigate(['/adminhome']);
          alert('تم التعديل بنجاح');

      },error:(error:HttpErrorResponse)=>{

        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name;  
        }
        if(this.errMsg.jobTitle){
          document.getElementById('jobTitle').textContent = this.errMsg.jobTitle;  
        }
        
      }
      });
  }

  getalldata(){
    this.owner.getadvertismentdetails('http://127.0.0.1:8000/api/edit/team/', this.id)
    . subscribe({
      next:(res => {
      console.log(res.data)
      this.team = res.data
    this.form.patchValue({
        name: this.team.name,
        jobTitle: this.team.jobTitle,
        image: this.team.image
      })
   
      })
    })
  }

  
}
