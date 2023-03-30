import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtService } from './jwtHelper.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private jwtService: JwtService) {
    const token = localStorage.getItem('current_user');
    this._isLoggedIn.next(!!token);
  }

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  login(email: string, password: string) {
    return this.http
      .post<any>('http://localhost:8080/login', { email, password })
      .pipe(
        tap((response) => {
          console.log(response, response.token);
          localStorage.setItem('current_user', response.token);
          this._isLoggedIn.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem('current_user');
  }

  public get loggedIn(): boolean {
    return this.jwtService.isAuthenticated();
  }

  public getToken(): string {
    return this.jwtService.getToken();
  }
}
