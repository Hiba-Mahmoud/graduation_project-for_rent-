import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { NavigationEnd } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { TokenService } from 'src/app/auth/service/token.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  name!: string;
  role!: string;
  image!: string;

  isAdmin!:boolean;
  isRenter!:boolean;
  isOwner!:boolean;
  isSuperAdmin!:boolean;
  isLogin!:boolean;

  constructor(private observer: BreakpointObserver, private router: Router, private _AuthGuard: AuthGuard
    ,  private removeToken:TokenService ) { }

  ngOnInit(): void {

    this.checkLogin();

    this.name = localStorage.getItem('name');
    this.image = localStorage.getItem('image');
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
       
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 766px)'])

      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

      this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  checkLogin(){
    this._AuthGuard.isLogin.subscribe((res:any)=>{
      this.isLogin = res
    })
  }
 
  

}
