import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/sms-models/UserRegister';
import { UserService } from 'src/SmsServices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  registerForm!: FormGroup;
  submitted = false;
  registerUser!: UserRegister;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.registerUser.userFullName = this.registerForm.get("firstName")?.value+this.registerForm.get("lastName")?.value;
    this.registerUser.email = this.registerForm.get("email")?.value;
    this.registerUser.password = this.registerForm.get("password")?.value;
    this.userService.registerUser(this.registerUser).subscribe(
      response => {
        this.router.navigateByUrl("/login");
      })
  }

}
