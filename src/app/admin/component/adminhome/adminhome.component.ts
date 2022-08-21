import { OwnerService } from 'src/app/services/owner.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'



@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  allRenters!:number;

  constructor(private route:Router,private owner:OwnerService) {
    this.getallRenters();
  }

  ngOnInit(): void {
  }


  getallRenters(){
        let rent ='http://127.0.0.1:8000/api/admin/renters';
        this.owner.getadmincounters(rent).subscribe(data=>{
          console.log(data.count)
          this.allRenters=data.counts;
          // console.log(data)

        },error=>{
          console.log(error)
        })
  }

  getallowners(){
    let rent ='http://127.0.0.1:8000/api/admin/renters';
    this.owner.getadmincounters(rent).subscribe(data=>{
      console.log(data.count)
      this.allRenters=data.counts;
      // console.log(data)

    },error=>{
      console.log(error)
    })
}

  //routes
  navigate(){
    this.route.navigate(['notrented'])
  }
  pending(){
    this.route.navigate(['pending'])
  }
  rented(){
    this.route.navigate(['rented'])

  }
  payedRending(){
    this.route.navigate(['payed-rented'])

  }

}
