import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  dbUrl: string = 'http://localhost:8080/doctors/';

  getAllDoctors() {
    return this.http.get<any[]>(this.dbUrl);
  }
}
