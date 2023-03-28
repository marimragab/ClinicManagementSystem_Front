import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor(private http: HttpClient) {}
  dbUrl: string = 'http://localhost:8080/clinics/';

  getAllClinics() {
    return this.http.get<any[]>(this.dbUrl);
  }
}
