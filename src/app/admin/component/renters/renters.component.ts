
import { Component, OnInit ,  ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatPaginator} from '@angular/material/paginator';
import { MatSort ,Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { AdminServiceService } from '../../service/admin-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-renters',
  templateUrl: './renters.component.html',
  styleUrls: ['./renters.component.css']
})
export class RentersComponent implements OnInit {

  constructor(private service:AdminServiceService ,private _liveAnnouncer: LiveAnnouncer) { 
    
  }
  dataSource:any
  displayedColumns: string[] = ['id', 'name', 'email','phone', 'gender','block','delete'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  allData:any;
  length:any;
   success: any;
   message: string;
   loading:boolean=true;

  ngOnInit(): void {
   this.getAll();
  }
  
getAll(){
  this.service.getAll("http://127.0.0.1:8000/api/admin/renters").subscribe(data=>{
    this.allData=data.renters;
     this.dataSource = new MatTableDataSource(data.renters);
     this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.loading=false;

    this.length=this.allData.length;
   
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


delete(id:number){
  if(confirm("هل تريد تأكيد الحذف ؟")){
    this.service.delete("http://127.0.0.1:8000/api/admin/delete/",id).subscribe(res=>{
      this.success=res;
      this.getAll();
    
  })
  }

  
 

}

block(id:number){
  if(confirm("هل تريد تأكيد الحظر ؟")){
    this.service.block("http://127.0.0.1:8000/api/admin/block/",id).subscribe(res=>{
      this.success=res;
      this.getAll();
    })
  }
 

}


// confirm(): void {
//   this.message = 'Confirmed!';
//   this.modalRef.hide();
// }

// decline(): void {
//   this.message = 'Declined!';
//   this.modalRef.hide();
// }
}
