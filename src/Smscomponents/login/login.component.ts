import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from 'src/SmsServices/user.service';
import { UserToken } from './UserToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  userToken!: UserToken;

  constructor(private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  get f() { return this.loginForm.controls; }
  errormsg :any;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.spinner.show();
    this.userService.login(this.loginForm.value).subscribe(

      (data: any) => {
        this.userToken = data;
        localStorage.setItem("userName", this.userToken.userName);
        localStorage.setItem("token", this.userToken.token);
        localStorage.setItem("roles", this.userToken.roles);
        this.spinner.hide();
        this.router.navigateByUrl('/dashboard')
      }
     
    ),(_error: any)=>{
       this.errormsg  = _error;
       alert(_error);
    };


  }

}
