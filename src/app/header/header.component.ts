import { TokenService } from './../auth/service/token.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NotificationService } from '../srvices/notification.service';
import Pusher from 'pusher-js';

import { getNumberOfCurrencyDigits } from '@angular/common';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allNotification:any = [];
  $dataaa:any;
  
  totalNumber:any=0;
  id:string;
  toaster_message:any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private toastr: ToastrService,private localstorage:TokenService,private observer: BreakpointObserver, private router: Router , private removeToken:TokenService ,private notification_services:NotificationService ) { }
 
    async ngOnInit(){
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
        this.$dataaa = JSON.stringify(data)
        this.totalNumber = this.totalNumber + 1 ;
       
        
        console.log( this.$dataaa);

      });

      //add comment notification
      var channel1 = pusher.subscribe('NewChannel');
      await channel1.bind("CommentNotification", function(data) {
       
        this.$dataaa = JSON.stringify(data)
        this.totalNumber = this.totalNumber + 1 ;
        
        console.log( this.$dataaa);
      });
      //add admin approve notification
      const channel2 = await pusher.subscribe('NewChannel2');
      await channel2.bind("ConfirmOwnerRequestFromAdmin", (data) =>{

        

        // this.$dataaa = JSON.stringify(data)
        // this.user_id = data.user_id;
        //  this.toaster_message = data.message;
         this.toastr.success( data.message, "لديك اشعار جديد");

        // console.log( data);
        // console.log( data.message);
        // console.log( data.time);
        // console.log( data.user_id);
        // console.log(this.id);
       
        // if( (data.user_id) == (data.user_id)){this.showToasterInfo();}



  


       

       
      });
     
  
    }


  logout(){
    this.removeToken.clearLocalStorage();
    this.router.navigateByUrl('/login')
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
    







//   ngAfterViewInit() {
//     this.observer
//       .observe(['(max-width: 766px)'])

//       .subscribe((res) => {
//         if (res.matches) {
//           this.sidenav.mode = 'over';
//           this.sidenav.close();
//         } else {
//           this.sidenav.mode = 'side';
//           this.sidenav.open();
//         }
//       });


// }
}
