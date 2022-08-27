import { OwnerService } from './../../services/owner.service';
import { TokenService } from './../../auth/service/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-userpayed-rented-ads',
  templateUrl: './userpayed-rented-ads.component.html',
  styleUrls: ['./userpayed-rented-ads.component.css']
})
export class UserpayedRentedAdsComponent implements OnInit {
  totalNumber: any;
    page: number = 1;
    token:any;
    advertisment:any;
    // token: any;
  length: any;
  result:any;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displaycolumns: string[] = ['الاعلان', 'حذف'];
  constructor(private http:HttpClient,private localstorage:TokenService,private user:OwnerService) {


  }

  ngOnInit(): void {
    this.getToken()
    this.getallPayedAds();
  }

  getToken():any{
    let local=this.localstorage.gettokenfromLocalstorage();
  let session=this.localstorage.getToken();

  if(local){
    console.log(local)
    this.token =local;
  }else if (session){
    console.log(session)
    this.token =session;
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  return headers;
  }

  getallPayedAds(){

    let header = this.getToken();
    let link = 'http://127.0.0.1:8000/api/renter/advertisementrented';

    this.user.getPending(link,header).subscribe((res)=>{
      console.log('ddddddddd')
     console.log(res)
     this.result =res;
     console.log( res.allAdvertisements)
     this.advertisment = res.allAdvertisements
     console.log( this.advertisment)
     this.length = res.count;
    //  this.dataSource = new MatTableDataSource(this.advertisment);
    //  this.length= data;
    //  this.dataSource.paginator = this.paginator;
    //  this.dataSource.sort = this.sort;
    })

  }



}
