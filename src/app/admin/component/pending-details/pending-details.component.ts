import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../service/admin-service.service';
@Component({
  selector: 'app-pending-details',
  templateUrl: './pending-details.component.html',
  styleUrls: ['./pending-details.component.css']
})
export class PendingDetailsComponent implements OnInit {
  loading:boolean=true;
  id :any;
  data:any={}
  images:any=[]
  adverId:any ;
  constructor(private adminService :AdminServiceService ,private route:ActivatedRoute , private router :Router) { 
    this.id=this.route.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
    this.getAdvertismentById();
  }

  getAdvertismentById(){
    this.adminService.getAdvertismentById("http://127.0.0.1:8000/api/show/pending/",this.id).subscribe((res:any)=>{
     console.log(res)
     this.data=res.advertisement[0];
         this.images= this.data.advertisement_image ;
     this.adverId=this.data.id;
    
     
     this.loading=false;
    })
 
  }

  
 

}
