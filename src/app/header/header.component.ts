import { TokenService } from './../auth/service/token.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NotificationService } from '../srvices/notification.service';
import Pusher from 'pusher-js';
import { getNumberOfCurrencyDigits } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allNotification:any = [];
  $dataaa:any;
  
  totalNumber:any=0;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private router: Router , private removeToken:TokenService ,private notification_services:NotificationService) { }



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
      channel1.bind("CommentNotification", function(data) {
       
        this.$dataaa = JSON.stringify(data)
        this.totalNumber = this.totalNumber + 1 ;
        
        console.log( this.$dataaa);
      });
      //add admin approve notification
      var channel2 = pusher.subscribe('NewChannel2');
      channel2.bind("ConfirmOwnerRequestFromAdmin", function(data) {
        this.$dataaa = JSON.stringify(data)
        this.totalNumber = this.totalNumber + 1 ;
        console.log( data);
        console.log( data.message);
        console.log( data.time);
        console.log( data.id);



        console.log( this.$dataaa);
        console.log( this.$dataaa.message);
        console.log( this.$dataaa[0]);



       

       
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
  zero(){
    this.totalNumber= 0;
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
