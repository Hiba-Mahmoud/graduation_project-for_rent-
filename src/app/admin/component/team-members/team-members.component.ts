import { Component, OnInit } from '@angular/core';
import { DeleteServiceService } from './services/delete-service.service';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { UpdateServiceService } from './services/update-service.service';
import { ShowService } from './services/show.service';
import {  ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  
  members: any = []; 
  status ;
  del;
  up;

  constructor(private objDel:DeleteServiceService ,
    private http:HttpClient , 
    private objUp:UpdateServiceService ,
    private objSh:ShowService,
    private route:Router ) { 

   this.getMembersData();
 }
  
 getMembersData(){
  this.objSh.getAllMembers().subscribe(res=>{
    // console.log("res");
    // console.log(res);
    this.members=res;
    console.log("Data is =");
    console.log(this.members.data);
  });
 }

 deleteMem(rId :number){
  this.del = rId;
  console.log(this.del);
  if(confirm("هل تريد تأكيد الحذف ؟")){
  this.objDel.delMem(rId).subscribe(res=>{
    console.log("deleeeeeeeeeeeeeeeeet"); 
    this.getMembersData();
  })
 }

}

 updateMem(sId){
  this.up = sId;
  console.log(this.up);
  this.route.navigate(['/teamUpdate'], {queryParams : {data: this.up}});
 }
 
 add(){  this.route.navigate(['/aboutForm']);  }

  ngOnInit(): void {
  }

}
