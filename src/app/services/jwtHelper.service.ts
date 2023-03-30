import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('current_user');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken(): string {
    return localStorage.getItem('current_user');
  }
}
