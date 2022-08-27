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
  
  totalNumber:any;
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
    private removeToken:TokenService,private _AuthGuard:AuthGuard,private toastr: ToastrService,private localstorage:TokenService,  private notification_services:NotificationService ) { }
 
    async ngOnInit(){
     
      this.checkLogin();
      this.get_all_notification();
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
   
  
  //  await this.notification_services.get_All_notification().subscribe(result => {console.log(result);
  //       this.allNotification=result.notification;
          
  //          this.totalNumber=result.count;
           
  //           console.log(this.totalNumber);
  //         });
  
  //  if(this.isLogin){
      
  //     this.getcountofnot();
    
  //  }



      Pusher.logToConsole = true;
      var pusher = new Pusher('dd3cfafeb7c0b16de8e9', {
        cluster: 'eu'
      });
      
     
      

      

      

      //add advertisement notificaation

      const channel3 = await pusher.subscribe('NewChannel3');
      await channel3.bind("AddAdvertisement", (data) =>{
        
        if(this.isLogin){
        if( (this.isAdmin) || (this.isSuperAdmin)){

        this.toastr.success( data.message,"لديك اشعار جديد");
        
          
          console.log( data.user_id);
          console.log( this.id);

        }
        }

        });
    

      //add comment notification
      const channel1 = await pusher.subscribe('NewChannel');
      await channel1.bind("CommentNotification",(data)=> {

        //check if is auther of the advertisement 
        if(this.isLogin){
        if((this.id == data.advertisement_owner_id ) && (this.isOwner)){

        this.toastr.success( data.content,"لديك اشعار جديد");
        
        
        console.log( data);
        }
        }
      });


      const channel2 = await pusher.subscribe('NewChannel2');
      await channel2.bind("ConfirmOwnerRequestFromAdmin", (data) =>{
        //check if is auther of the advertisement 
        if(this.isLogin){
            console.log(this.id);
          console.log( data.user_id);
        if(( this.id == data.user_id ) && ( this.isOwner )){
          console.log(this.id);
          console.log( data.user_id);
             this.toastr.success( data.message,"لديك اشعار جديد");
        } 
      }
      });

      
     

    
    const payment = await pusher.subscribe('payment');
    await payment.bind("PaymentNotification", (data) =>{
      // check if is auther of the advertisement 
      if(this.isLogin){
          console.log(this.id);
        console.log( data.owner_id);
      if(( this.id == data.owner_id ) && ( this.isOwner )){
        console.log(this.id);
        console.log( data.owner_id);
         
      } 
    }
    
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


  

  
  getcountofnot(){

    this.notification_services.get_All_notification().subscribe(result => {console.log(result);
      this.allNotification=result.notification;
        
         this.totalNumber=result.count;
         
          console.log(this.totalNumber);
        });
      
  }
  get_all_notification(){

    this.notification_services.get_All_notification().subscribe(result => {console.log(result);
      this.allNotification=result.notification;
        
         this.totalNumber=result.count;
         
          console.log(this.totalNumber);
        });
      
  }
  
  //make bell count zero 
  zero(){
    this.totalNumber= 0;
    // window.location.reload();
  }
  //info display of reat time notification 
 


 

  
  

}


