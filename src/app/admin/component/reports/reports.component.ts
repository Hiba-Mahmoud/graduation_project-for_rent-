import { Component, OnInit, ViewChild } from '@angular/core';
import { AllReportsService } from './services/all-reports.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeleteReportService } from './services/delete-report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  reports: any = [];
  status: any;
  del: any;
  show_id: any;
  // dataSource:any;
  length = 0;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displaycolumns: string[] = ['name', 'email', 'phone', 'action'];

  constructor(
    private obj: AllReportsService,
    private http: HttpClient,
    private delObj: DeleteReportService,
    private route: Router,
    private router: Router,
  ) {
    this.getReportsData();
  }

  getReportsData() {
    this.obj.getAllReports().subscribe((res) => {
      this.length = res.reports.length;

      this.dataSource = new MatTableDataSource(res.reports);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('res');
      console.log(res);
      this.reports = res;
      console.log('Data is =');
      console.log('this.reports');
      console.log(this.reports.reports);
    });
  }

  findContact(value: string) {
    this.applyFilter(value);
  }

  applyFilter(filter: string) {
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }


  deleteReport(rId: number) {
    this.del = rId;
    console.log(this.del);
    if (confirm('هل تريد تأكيد الحذف ؟')) {
      this.delObj.delRepo(rId).subscribe((res) => {
        console.log('deleeeeeeeeeeeeeeeeet');
        this.getReportsData();
      });
    }
  }
  showReport(sId) {
    this.show_id = sId;
    console.log(this.show_id);
    this.route.navigate(['/reports-details'], {
      queryParams: { data: this.show_id },
    });
  }

  ngOnInit(): void {}
}
