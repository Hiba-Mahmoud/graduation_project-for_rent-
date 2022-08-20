import { Component ,ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'forRent';
  isLogin!:boolean;


  constructor(private _AuthGuard:AuthGuard) {}
  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
    this._AuthGuard.isLogin.subscribe((res:any)=>{
      this.isLogin = res
    })
  }
}
