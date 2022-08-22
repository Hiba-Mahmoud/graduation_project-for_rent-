import { TokenService } from './../../../auth/service/token.service';
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
  allRenters:number;
  allowners:number;
  allAdmins:number;
  allBlocked:number;
  //ads
  acceptedAds:number;
  rejectedAds:number;
  pendingdAds:number;
  payedAds:number;
  message =false;

  constructor(private route:Router,private owner:OwnerService ,private local:TokenService) {
    this.getallRenters();
    this.getallowners();
    this.getallAdmins();
    this.getallBlocked();
    //ads
    this.getpayedAds();
    this.getpendingdAds();
    this.getrejectedAds();
    this.getacceptedAds();

  }

  ngOnInit(): void {
    this.message = this.local.getsuccmessage();
  }
//users counter

  getallRenters(){
        let rent ='http://127.0.0.1:8000/api/admin/renters';
        this.owner.getadmincounters(rent).subscribe(data=>{
          // console.log(data.count)
          this.allRenters=data.counts;
          // console.log(data)

        },error=>{
          console.log(error)
        })
  }

  getallowners(){
    let rent ='http://127.0.0.1:8000/api/admin/owners';
    this.owner.getadmincounters(rent).subscribe(data=>{
      // console.log(data.count)
      this.allowners=data.counts;
      // console.log(data)

    },error=>{
      console.log(error)
    })
}
getallAdmins(){
  let rent ='http://127.0.0.1:8000/api/admin/admins';
  this.owner.getadmincounters(rent).subscribe(data=>{
    // console.log(data.count)
    this.allAdmins=data.counts;
    // console.log(data)

  },error=>{
    console.log(error)
  })
}
getallBlocked(){
  let rent ='http://127.0.0.1:8000/api/admin/blocks';
  this.owner.getadmincounters(rent).subscribe(data=>{
    // console.log(data.count)
    this.allBlocked=data.counts;
    // console.log(data)

  },error=>{
    console.log(error)
  })
}
//ads

getpayedAds(){
  let rent ='http://127.0.0.1:8000/api/allRented/paymentmethod';
  this.owner.getadmincounters(rent).subscribe(data=>{
    this.payedAds=data.count;
  },error=>{
    console.log(error)
  })
}

getpendingdAds(){
  let rent ='http://127.0.0.1:8000/api/admin/pendingAdvertisement';
  this.owner.getadmincounters(rent).subscribe(data=>{
    this.pendingdAds=data.counts;
  },error=>{
    console.log(error)
  })
}

getrejectedAds(){
  let rent ='http://127.0.0.1:8000/api/admin/declinedAdvertisement';
  this.owner.getadmincounters(rent).subscribe(data=>{
    this.rejectedAds=data.count;
  },error=>{
    console.log(error)
  })
}
getacceptedAds(){
  let rent ='http://127.0.0.1:8000/api/admin/acceptedAdvertisement';
  this.owner.getadmincounters(rent).subscribe(data=>{
    this.acceptedAds=data.count;
  },error=>{
    console.log(error)
  })
}
  //routes
  payed(){
    this.route.navigate(['payed-rented'])
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
