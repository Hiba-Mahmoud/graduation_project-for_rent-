import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/auth/service/token.service';
import { AdvertismentService } from '../../services/advertisment.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from  '@angular/router' ;
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  starRating=0
  Rating=3
    adverId: any;
   reviews:any  ;

  token: string;
  commentForm=new FormGroup({
    comment :new FormControl('',Validators.minLength(4)),
    count :new FormControl('',Validators.required),

  })

  constructor(private advertismentService:AdvertismentService ,private localstorage:TokenService
     ,private http: HttpClient , private router :Router) { }

  ngOnInit(): void {
   
 
  }
  
  onSubmit(){
    console.log(this.commentForm.value);
    let local=this.localstorage.gettokenfromLocalstorage();
    let session=this.localstorage.getToken();
  
    if(local){
      this.token =local;
    }else if (session){
      this.token =session;
  
    }
    const headers = new HttpHeaders({
 
      'Authorization': `Bearer ${this.token}`
    });
    console.log(headers);

    this.http.post("http://127.0.0.1:8000/api/rate/store/" +this.adverId,this.commentForm.value ,{ headers: headers }).subscribe((data) => {
      console.log(data);      
      // this.router.navigate(['/details/'+this.adverId]);

      // this.commentForm.reset();
      window.location.reload();

      
   }
)

   
  }
 
}
