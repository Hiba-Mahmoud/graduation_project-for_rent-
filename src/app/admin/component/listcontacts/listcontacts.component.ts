import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AdminServiceService } from '../../service/admin-service.service';
import { MatTableDataSource  } from '@angular/material/table';
import { Icontacts } from '../../service/contacts';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})

export class ListcontactsComponent implements OnInit,AfterViewInit {
  dataSource=new MatTableDataSource<Icontacts>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  displaycolumns:string[]=["userId",'id','title','body','action']
  constructor(private AdminService:AdminServiceService) {

  }

  ngOnInit(): void {
    this.AdminService.getAllContacts().subscribe(data=>{
      this.dataSource=new MatTableDataSource<Icontacts>(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      // console.log(this.dataSource)
    },error=>{
      console.log(error)
    })
  }


  findContact(value:string){
    this.applyFilter(value);

  }

  applyFilter(filter:string){
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter =filter;


  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
