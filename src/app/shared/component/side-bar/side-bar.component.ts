import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { NavigationEnd } from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { TokenService } from 'src/app/auth/service/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwnerService } from 'src/app/services/owner.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
  Id!:string;
  image!: string;

  isAdmin!:boolean;
  isRenter!:boolean;
  isOwner!:boolean;
  isSuperAdmin!:boolean;
  isLogin!:boolean;
  images:FormGroup;
  profile:any;
  form: FormGroup;


  constructor(private observer: BreakpointObserver, private router: Router, private _AuthGuard: AuthGuard
    ,  private removeToken:TokenService , private formb:FormBuilder , private owner:OwnerService, public fb: FormBuilder , private http: HttpClient) { }

  ngOnInit(): void {

    this.checkLogin();

    this.name = localStorage.getItem('name');
    // this.image = localStorage.getItem('image');
    this.role = localStorage.getItem('role');
    this.Id = localStorage.getItem('id');

    if(this.role == 'admin'){
      this.isAdmin=true;
    }else if(this.role == 'superAdmin'){
      this.isSuperAdmin=true;
    }else if(this.role == 'renter'){
      this.isRenter=true;
    }else if(this.role == 'owner'){
      this.isOwner=true;
    }
    this.form = this.fb.group({
        image: [null],
    });
    this.getimage();
    this.images = this.formb.group({ image:[''], })
   

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
 
  fileInput(event:any){
    // console.log(event.target.files);    
    if (event.target.files && event.target.files[0])
     {      
        let imagename = event.target.files[0];
        // console.log(imagename);
        if (imagename) 
        {
          var formData: any = new FormData();
          formData.append('image', imagename, imagename.name)
          // console.log(imagename.name+'dataaaaaa')
        }
        var reader = new FileReader();      
    }
    this.http.post('http://127.0.0.1:8000/api/profile_setting_update_image/'+ this.Id ,formData ).
    subscribe({
      next:(response: any) => {
      // console.log(response)
      this.getimage();
    },error:(error: HttpErrorResponse) => {
      // console.log(error)
    }
    })  
    
}
getimage(){
  this.owner.getadvertismentdetails('http://127.0.0.1:8000/api/edit/image/',this.Id)
  . subscribe({
    next:(res => {
    // console.log(res.image.image)
    this.profile=res.image;
    this.form.patchValue({
      image: this.profile.image,
    })
    })
  })

}

}
