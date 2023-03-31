import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtService } from './jwtHelper.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AuthInfo } from '../models/auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private jwtService: JwtService) {
    this.jwtHelper = new JwtHelperService();
    const storedToken = this.getLocalStorageToken();
    if (!this.isExpired(storedToken)) {
      this.setToken(storedToken as string);
      this.setLoggedIn(true);
      this.setUser(this.getLocalStorageUser());
    }
    // const token = localStorage.getItem('current_user');
    // this._isLoggedIn.next(!!token);
  }

  // private _isLoggedIn = new BehaviorSubject<boolean>(false);
  // isLoggedIn = this._isLoggedIn.asObservable();

  private authInfo: AuthInfo = { isLoggedIn: false };
  jwtHelper: any;
  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:8080/login', {
      email,
      password,
    });
    // .pipe(
    //   tap((response) => {
    //     console.log(response, response.token);
    //     localStorage.setItem('current_user', response.token);
    //     //this._isLoggedIn.next(true);
    //   })
    // );
  }

  getAuthInfo() {
    return this.authInfo;
  }

  setUser(user: any) {
    console.log(user);
    this.authInfo.user = user;
    localStorage.setItem('current_user', JSON.stringify(user));
  }

  getUser() {
    return this.authInfo.user;
  }

  setToken(token: string) {
    this.authInfo.token = token;
    localStorage.setItem('token', token);
    this.authInfo.role = this.getDecodedToken;
  }

  getToken() {
    return this.authInfo.token;
  }

  getDecodedToken(): { id: string; role: string; exp: number; iat: number } {
    return this.jwtHelper.decodeToken(this.getLocalStorageToken());
  }

  getLocalStorageToken() {
    return localStorage.getItem('token');
  }

  removeLocalStorageToken() {
    return localStorage.removeItem('token');
  }

  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('current_user') || '{}');
  }

  removeLocalStorageUser() {
    localStorage.removeItem('current_user');
  }

  isExpired(token: string | null) {
    return this.jwtHelper.isTokenExpired(token);
  }

  isAdmin() {
    return this.authInfo.role === 'Admin';
  }

  isLoggedIn() {
    return this.authInfo.isLoggedIn;
  }

  setLoggedIn(isLoggedIn: boolean) {
    this.authInfo.isLoggedIn = isLoggedIn;
    if (isLoggedIn) return;
    this.authInfo.token = undefined;
    this.authInfo.user = undefined;
  }

  logout() {
    localStorage.removeItem('current_user');
  }

  // public get loggedIn(): boolean {
  //   return this.jwtService.isAuthenticated();
  // }

  // public getToken(): string {
  //   return this.jwtService.getToken();
  // }
}
