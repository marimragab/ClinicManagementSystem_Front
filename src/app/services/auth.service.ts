import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtService } from './jwtHelper.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

  login(username: string, password: string) {
    return this.http
      .post<any>('http://localhost:8080/login', { username, password })
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem('access_token', response.access_token);
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return this.jwtService.isAuthenticated();
  }

  public getToken(): string {
    return this.jwtService.getToken();
  }
}
