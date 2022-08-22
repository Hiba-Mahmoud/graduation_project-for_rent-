import { Component, OnInit } from '@angular/core';
import { AllReportsService } from './services/all-reports.service';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { DeleteReportService } from './services/delete-report.service';
import {  ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: any = []; 
  status ;
  del;
  show_id;
  constructor(private obj:AllReportsService ,
     private http:HttpClient , 
     private delObj:DeleteReportService ,
     private route:Router ) { 
    this.getReportsData();
  }
  
  getReportsData(){
    this.obj.getAllReports().subscribe(res=>{
      console.log("res");
      console.log(res);
      this.reports=res;
      console.log("Data is =");
      console.log("this.reports");
      console.log(this.reports.reports);
    });
   }

   deleteReport(rId :number){
    this.del = rId;
    console.log(this.del);
    this.delObj.delRepo(rId).subscribe(res=>{
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
