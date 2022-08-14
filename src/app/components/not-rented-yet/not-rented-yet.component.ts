import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServiceService } from 'src/app/admin/service/admin-service.service';
import { Icontacts } from 'src/app/admin/service/contacts';

@Component({
  selector: 'app-not-rented-yet',
  templateUrl: './not-rented-yet.component.html',
  styleUrls: ['./not-rented-yet.component.css']
})
export class NotRentedYetComponent implements OnInit {
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

  

}
