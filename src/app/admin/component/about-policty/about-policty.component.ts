import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { GetDesService } from './get-des.service';
import { DeleteDesService } from './delete-des.service';
import {  ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-about-policty',
  templateUrl: './about-policty.component.html',
  styleUrls: ['./about-policty.component.css']
})
export class AboutPolictyComponent implements OnInit {
  arr: any = []; 
  status ;
  del;
  show_id;
  constructor(private objGet:GetDesService ,
    private objDel:DeleteDesService,
     private http:HttpClient , 
     private route:Router ) { 
    this.getAboutData();
  }
  getAboutData(){
    this.objGet.getAbout().subscribe(res=>{
      this.arr=res;
      console.log("this.arr");
      console.log(this.arr);
    });
   }

   deleteReport(rId :number){
    this.del = rId;
    console.log(this.del);
    this.objDel.delDesc(rId).subscribe(res=>{
      console.log("deleeeeeeeeeeeeeeeeet"); 
          window.location.reload();
 })
   }
   showReport(sId){
    this.show_id = sId;
    console.log(this.show_id);
    this.route.navigate(['/reports-details'], {queryParams : {data: this.show_id}});
   }


  ngOnInit(): void {
  }

}
