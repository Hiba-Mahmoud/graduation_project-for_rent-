import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../auth/service/users.service';
import { Iuser } from '../../auth/service/user';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';



@Component({
  selector: 'app-blocked-users-table',
  templateUrl: './blocked-users-table.component.html',
  styleUrls: ['./blocked-users-table.component.css']
})
export class BlockedUsersTableComponent implements OnInit {

  displayedColumns: string[] =['id' , 'username', 'name' , 'email' , 'city' , 'actions'] ;
  dataSource ;
  constructor( private services: UsersService) { }

  ngOnInit(): void
  {
    this.services.getusers().subscribe(data=>{
      this.dataSource=new MatTableDataSource<Iuser>(data);
    })
  }

}
