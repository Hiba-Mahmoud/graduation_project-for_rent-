
import { Component, OnInit ,  ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatPaginator} from '@angular/material/paginator';
import { MatSort ,Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/interface/user';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  dataSource:any
  displayedColumns: string[] = ['id', 'name', 'email', 'address','block','delete'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private service:AdminServiceService ,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.service.getAll("https://jsonplaceholder.typicode.com/users").subscribe(data=>{
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort=this.sort;
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

}