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
  email: string;
  password: string;
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required]),
  // });
  matcher = new MyErrorStateMatcher();

  login() {
    this.authService
      .login(this.email, this.password)
      .subscribe((response: { token: string }) => {
        console.log(response);
        localStorage.setItem('jwt_token', response.token);
      });
  }

  logout() {
    this.authService.logout();
  }
}
