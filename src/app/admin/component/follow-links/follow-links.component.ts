import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import {  ActivatedRoute,Router } from '@angular/router';
import { GetLinksService } from './get-links.service';

@Component({
  selector: 'app-follow-links',
  templateUrl: './follow-links.component.html',
  styleUrls: ['./follow-links.component.css']
})
export class FollowLinksComponent implements OnInit {  
  links: any = []; 
  status ;
  del_id;
  up_id;
  constructor(private http:HttpClient , 
     private objGet:GetLinksService ,
     private route:Router ) { 
    this.getLinksData();
  }
  getLinksData(){
    this.objGet.getAllLinks().subscribe(res=>{
      this.links=res;
      console.log("Data is =");
      console.log("this.links");
      console.log(this.links.links);
    });
   }
   updateLinks(id){
    this.up_id=id;
    this.route.navigate(['/followForm'], {queryParams : {data: this.up_id}});
    // this.route.navigate(['/followForm']);
   }


  ngOnInit(): void {
  }

}
