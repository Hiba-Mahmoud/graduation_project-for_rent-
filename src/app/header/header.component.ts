import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../srvices/notification.service';
import Pusher from 'pusher-js';

import { getNumberOfCurrencyDigits } from '@angular/common';
import { ToastrService } from 'ngx-toastr';




import { TokenService } from '../auth/service/token.service';
import { AuthGuard } from '../guard/auth.guard';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allNotification:any = [];
  $dataaa:any;
  
  totalNumber:any=0;
  toaster_message:any;
  isLogin!:boolean;
  
  name!: string;
  role!: string;
  id!: any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isAdmin!:boolean;
  isRenter!:boolean;
  isOwner!:boolean;
  isSuperAdmin!:boolean;
  constructor( private router: Router ,
    private removeToken:TokenService,private _AuthGuard:AuthGuard
 ,private toastr: ToastrService,private localstorage:TokenService,  private notification_services:NotificationService ) { }
 
    async ngOnInit(){

      this.checkLogin();
      this.name = localStorage.getItem('name');
      this.id = localStorage.getItem('id');
      this.role = localStorage.getItem('role');
  
      if(this.role == 'admin'){
        this.isAdmin=true;
      }else if(this.role == 'superAdmin'){
        this.isSuperAdmin=true;
      }else if(this.role == 'renter'){
        this.isRenter=true;
      }else if(this.role == 'owner'){
        this.isOwner=true;
      }
   
  
  
  







      Pusher.logToConsole = true;
      var pusher = new Pusher('dd3cfafeb7c0b16de8e9', {
        cluster: 'eu'
      });
      // this.get_notification();
      this.getcountofnot ();
      this.zero();
     
     
      

      

      

      //add advertisement notificaation

      var channel3 = pusher.subscribe('NewChannel3');
      channel3.bind("AddAdvertisement", function(data) {
        //check if is admin
        this.toastr.success( data.message,"لديك اشعار جديد");
       
        
        console.log( data);

      });

      //add comment notification
      var channel1 = pusher.subscribe('NewChannel');
      await channel1.bind("CommentNotification", function(data) {

        //check if is auther of the advertisement 

        this.toastr.success( data.content,"لديك اشعار جديد");
        
        
        console.log( data);
      });


      //add admin approve notification
      const channel2 = await pusher.subscribe('NewChannel2');
      await channel2.bind("ConfirmOwnerRequestFromAdmin", (data) =>{
        //check if is auther of the advertisement 
             this.toastr.success( data.message,"لديك اشعار جديد");
             

      });
     
  
    }
  
  
  


    logout(){
      this.removeToken.clearLocalStorage();
      this._AuthGuard.isLogin.next(false);
    
      this.router.navigateByUrl('/login');
    }


    checkLogin(){
      this._AuthGuard.isLogin.subscribe((res:any)=>{
        this.isLogin = res
      })
    }


  

  get_notification() {
   
    //check user 
    this.notification_services.get_All_notification().subscribe(result => {console.log(result);
    this.allNotification=result.notification;
      
       this.totalNumber=result.count;
        console.log(this.allNotification);
        console.log(this.totalNumber);
       
    
    });
   
    
    // get notification from backend in alerts or in any form 
    //services 
    //function of services of file of ts 
  }
  getcountofnot (){
    this.notification_services.get_All_notification().subscribe(result => {console.log(result);
      this.allNotification=result.notification;
        
         this.totalNumber=result.count;
         
          console.log(this.totalNumber);
        });
      
  }
  //make bell count zero 
  zero(){
    this.totalNumber= 0;
  }
  //info display of reat time notification 
 


  toast(){
    this.toastr.success(this.toaster_message ,"aaa");
    }
    

  
 

}


