import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TokenService } from 'src/app/auth/service/token.service';
import { OwnerService } from 'src/app/services/owner.service';
import { AdminServiceService } from '../../service/admin-service.service';
import { Icontacts } from '../../service/contacts';

@Component({
  selector: 'app-accepted-ads',
  templateUrl: './accepted-ads.component.html',
  styleUrls: ['./accepted-ads.component.css']
})
export class AcceptedAdsComponent implements OnInit {
  length=0;

  dataSource=new MatTableDataSource<Icontacts>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  displaycolumns:string[]=['الاعلان','تعديل']
  constructor(private router:Router,private localstorage:TokenService,private AdminService:AdminServiceService ,private http:HttpClient, private owner:OwnerService,private localstoage:TokenService) {
  }

  ngOnInit(): void {
    this.getallaccepted();

  }
  show(id:number){
    this.router.navigate(['details',id])

  }

  getallaccepted(){

      let pending ='http://127.0.0.1:8000/api/admin/acceptedAdvertisement'
      this.owner.getadmincounters(pending).subscribe({next:data=>{
        // console.log(data.accepted_advertisement)
        this.length=data.accepted_advertisement.length
        console.log(this.length)
        this.dataSource=new MatTableDataSource(data.accepted_advertisement);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },error:
      error=>{
        console.log(error)
      }})

  }

  findContact(value:string){
    this.applyFilter(value);

  }

  applyFilter(filter:string){
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter =filter;


  }

  delete(id:any){
    if (confirm('هل تريد مسح الاعلان؟')){

    this.http.delete('http://127.0.0.1:8000/api/admin/deleteAdvertisement/'+id).subscribe((res)=>{
      console.log(res)
    },
    (error)=>{
      console.log(error)
    })
  }
  this.getallaccepted();

  }


}
