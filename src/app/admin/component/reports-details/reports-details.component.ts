import { Component, OnInit } from '@angular/core';
import { ReportShowService } from './services/report-show.service';
import {  ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.css']
})
export class ReportsDetailsComponent implements OnInit {

  reportData: any = []; 
  shared_id ;

  constructor(private obj:ReportShowService , 
    private route:ActivatedRoute , 
    private http:HttpClient ) { 

    // this.getReportData();
  }

 

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params : any) =>{
      console.log("params = " , params);
      this.shared_id=params.data;
      console.log("this.shared_id = " , this.shared_id)
    })
    this.http
    .get('http://127.0.0.1:8000/api/admin/contactUs/show/'+this.shared_id)
    .subscribe( res=>{
      console.log("res i = " , res);
      this.reportData=res;
      console.log("Data is =");
      console.log("this.reports");
      console.log(this.reportData.report);
    });
  }

  // getReportData(){
  //   this.obj.getReport(this.shared_id).subscribe(res=>{
  //     console.log("res");
  //     console.log(res);
  //     this.reportData=res;
  //     console.log("Data is =");
  //     console.log("this.reports");
  //     console.log(this.reportData.report);
  //   });
  //  }


}
