import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { AdvertismentService } from '../../services/advertisment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  starRating=0
  Rating=3
   
  @Input() adverId: any;
  @Input() reviews:any ;

  commentForm=new FormGroup({
    comment :new FormControl('',Validators.minLength(4)),
    rating :new FormControl('',Validators.required),

  })

  constructor(private advertismentService:AdvertismentService ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.advertismentService.saveComment("http://127.0.0.1:8000/api/rate/store/" ,this.adverId,this.commentForm.value).subscribe(res=>
    {
      console.log("success")
    })
  }
 
}
