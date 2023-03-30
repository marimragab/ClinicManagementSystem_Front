import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public authService: AuthService) {}
  // get loginValues() {
  //   return this.loginForm.controls;
  // }

  hide = true;
  // email: string;
  // password: string;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  matcher = new MyErrorStateMatcher();

  login() {
    this.authService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          // If the user is authenticated, redirect them to their page based on their role
          if (response.data.role === 'admin') {
            // Redirect to admin page
            console.log('Admin Logged');
          } else if (response.data.role === 'patient') {
            // Redirect to patient page
            console.log('Patient Logged');
          } else if (response.data.role === 'doctor') {
            console.log('Doctor Logged');
          } else {
            console.log('Employee Logged');
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  logout() {
    this.authService.logout();
  }
}
