import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetUserDetailsService {
  constructor(private http: HttpClient) {}

  dbURL: string = 'http://localhost:8080/';

  getUserDetails(endpoint: string, id: number) {
    return this.http.get(this.dbURL + endpoint + id);
  }
}
