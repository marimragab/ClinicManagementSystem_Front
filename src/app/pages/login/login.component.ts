import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GetUserDetailsService } from 'src/app/services/get-user-details.service';

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
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private getUserDetailsService: GetUserDetailsService
  ) {}
  // get loginValues() {
  //   return this.loginForm.controls;
  // }

  hide = true;
  // email: string;
  // password: string;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(
      //   `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`
      // ),
    ]),
  });

  doesLoginHasError = false;
  activationMessage = false;
  isAccountActivated = true;
  doesFormHasInvalidData: { email?: any; password?: any } = {};
  matcher = new MyErrorStateMatcher();

  checkFormValidation() {
    if (this.loginForm.get('email')?.errors) {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        email: { ...this.loginForm.get('email')?.errors },
      };
    } else {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        email: null,
      };
    }

    if (this.loginForm.get('password')?.errors) {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        password: { ...this.loginForm.get('password')?.errors },
      };
    } else {
      this.doesFormHasInvalidData = {
        ...this.doesFormHasInvalidData,
        password: null,
      };
    }

    console.log(this.loginForm.get('email')?.errors);
    console.log(this.loginForm.get('password')?.errors);
    console.log(this.doesFormHasInvalidData);
  }

  // login() {
  //   this.authService
  //     .login(
  //       this.loginForm.get('email')?.value,
  //       this.loginForm.get('password')?.value
  //     )
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         // If the user is authenticated, redirect them to their page based on their role
  //         if (response.data.role === 'admin') {
  //           // Redirect to admin page
  //           console.log('Admin Logged');
  //         } else if (response.data.role === 'patient') {
  //           // Redirect to patient page
  //           console.log('Patient Logged');
  //         } else if (response.data.role === 'doctor') {
  //           console.log('Doctor Logged');
  //         } else {
  //           console.log('Employee Logged');
  //         }
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }

  login() {
    this.authService
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: (userInfo) => {
          console.log(userInfo);
          this.authService.setToken(userInfo.token);
          if (userInfo.data.role == 'admin') {
            this.authService.setUser(userInfo);
            this.authService.setLoggedIn(true);
            this.router.navigateByUrl('/admin/dashboard');
            this.doesLoginHasError = false;
          } else
            this.retrieveLoggedUserInfo(
              userInfo.data.role,
              userInfo.data.userId
            );
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  logout() {
    this.authService.logout();
  }

  retrieveLoggedUserInfo(role: string, id: number) {
    this.getUserDetailsService
      .getUserDetails(role + 's/', id)
      .subscribe((user) => {
        console.log(user);
        this.authService.setUser(user);
        this.authService.setLoggedIn(true);
        this.doesLoginHasError = false;

        if (role == 'patient') this.router.navigateByUrl('/patient');
        else if (role == 'doctor'){
          this.router.navigateByUrl('/doctor/dash');
         

        }
          
          
      });
  }
  ngOnInit() {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('/');
  }
}
