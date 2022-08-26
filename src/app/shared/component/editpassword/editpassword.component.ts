import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/auth/service/token.service';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css'],
})
export class EditpasswordComponent implements OnInit {
  passwdreset: FormGroup;
  errMsg: any = [];
  token: string;
  oldpass:any;
  newpass:any;
  passchanged:any;
  confirmpass:any;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private localstorage: TokenService
  ) {
    //private fb:FormBuilder,private router:Router,private http:HttpClient
  }

  ngOnInit(): void {
    this.passwdreset = this.fb.group({
      old_password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$'
          ),
        ],
      ],
      new_password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$'
          ),
        ],
      ],
      new_password_confirmation: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$'
          ),
        ],
      ],
    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('old_password', this.passwdreset.get('old_password').value);
    formData.append('new_password', this.passwdreset.get('new_password').value);
    formData.append(
      'new_password_confirmation',
      this.passwdreset.get('new_password_confirmation').value
    );
    console.log(formData);
    let headers = this.getToken();
    this.http
      .post(
        'http://127.0.0.1:8000/api/profile_setting_password',
        formData,
        headers
      )
      .subscribe({
        next: (succ: any) => {
          console.log('process is = ', succ);
          this.passchanged=true;
          // if(window.confirm('')){
          //   //put your delete method logic here
          //   this.router.navigate(['/adminhome']);
          //  }
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.errMsg = error.error['error'];
          console.log(this.errMsg);
          if (this.errMsg.old_password) {
            this.oldpass =
              this.errMsg.old_password;
          }
          if (this.errMsg.new_password) {
            this.newpass=
              this.errMsg.new_password;
          }
          if (this.errMsg.new_password_confirmation) {
            this.confirmpass=
              this.errMsg.new_password_confirmation;
          }
        },
      });
  }
  getToken(): any {
    let local = this.localstorage.gettokenfromLocalstorage();
    let session = this.localstorage.getToken();

    if (local) {
      console.log(local);
      this.token = local;
    } else if (session) {
      console.log(session);
      this.token = session;
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return headers;
  }
}
