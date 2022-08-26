import { Component, OnInit ,  ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatPaginator} from '@angular/material/paginator';
import { MatSort ,Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-adver-requests',
  templateUrl: './adver-requests.component.html',
  styleUrls: ['./adver-requests.component.css']
})
export class AdverRequestsComponent implements OnInit {
  dataSource:any
  displayedColumns: string[] = ['id', 'title' ,'description','accept','reject'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  allData:any;
  length:any;
   success: any;
   message: string;
   loading:boolean=true;

  constructor(private service:AdminServiceService ,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getAll("http://127.0.0.1:8000/api/admin/pendingAdvertisement").subscribe(data=>{
      this.allData=data.pending_advertisement;
       this.dataSource = new MatTableDataSource(data.pending_advertisement);
       this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
      this.loading=false;
  
      this.length=this.allData.length;
     console.log(this.allData);
      })
  }
  findByName(name:HTMLInputElement){
    this.applyFilter(name.value);
  }
  applyFilter(filterValue :string){
    filterValue=filterValue.trim();
    filterValue=filterValue.toLocaleLowerCase();
    this.dataSource.filter=filterValue;
  }
  announceSortChange(sortState: Sort) {
   
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  accept(id:number){
      this.service.accept("http://127.0.0.1:8000/api/admin/confirmAdvertisement/",id).subscribe(res=>{
        this.success=res;
        this.getAll();
      
    })
    
  }


  reject(id:number){
    if(confirm("هل تريد تأكيد رفض الاعلان ؟")){
      this.service.reject("http://127.0.0.1:8000/api/admin/rejectedAdvertisement/",id).subscribe(res=>{
        this.success=res;
        this.getAll();
      
    })
    }
  
    
   
  
  }
}
