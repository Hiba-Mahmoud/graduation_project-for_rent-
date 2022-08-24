import { resetPassword } from './../../classesAndinterfaces/resetPassword';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { IUser } from '../../classesAndinterfaces/registerationData';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';
import { ResetPasswordService } from '../../service/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  loginForm: FormGroup;
  user = new IUser();
  errMsg: any;
  userId: any;
  emailerror: any;
  passwoderror: any;
  ischecked: boolean;
  passwordNotMatch: boolean = false;

  constructor(
    private resetpass: ResetPasswordService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private token: TokenService,
    private auth: AuthService,

  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password: [
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
      password_confirmation: [
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

  submit() {
    if (
      this.loginForm.value.password !=
      this.loginForm.value.password_confirmation
    ) {
      this.passwordNotMatch = true;
      console.log('llllllllllllll');
    } else {
      this.user.password = this.loginForm.value.password;
      this.user.password_confirmation =
        this.loginForm.value.password_confirmation;
      this.user.code = Number(sessionStorage.getItem('code'));
      this.user.email = sessionStorage.getItem('email');
      console.log(this.user);
      this.http
        .post('http://127.0.0.1:8000/api/password/reset', this.user)
        .subscribe({
          next: (response: any) => {
            console.log(response);
            this.router.navigateByUrl('/login');

          },
          error: (error) => {
            console.log(error);
            this.passwoderror = error.error.message;
          },
        });
    }

    console.log(this.passwordNotMatch);
  }
}
