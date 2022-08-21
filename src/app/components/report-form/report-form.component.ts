import { Component, OnInit } from '@angular/core';
import { AddReportService } from './services/add-report.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  constructor(private addReport:AddReportService) {
    // this.getReportData(data);
   }

  getReportData(data :any){
    console.log(data);
    this.addReport.saveDate(data).subscribe(result=>{
      console.log("result");
      console.log(result);
    })
  }

  ngOnInit(): void {
  }

}
