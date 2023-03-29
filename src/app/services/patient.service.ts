import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  dbUrl: string = 'http://localhost:8080/patients/';

  //Admin Only
  getAllPatients() {
    return this.http.get<Patient[]>(this.dbUrl);
  }

  updatePatientByAdmin(id: number, patient: Patient) {
    return this.http.patch<Patient>(this.dbUrl + 'admin/' + id, patient);
  }

  //Public route
  addPatient(newPatient: Patient) {
    return this.http.post<Patient>(this.dbUrl, newPatient);
  }

  //Admin or patient
  getPatientById(id: number) {
    return this.http.get<Patient>(this.dbUrl + id);
  }

  updatePatient(id: number, patient: Patient) {
    return this.http.patch<Patient>(this.dbUrl + id, patient);
  }

  deletePatientById(id: number) {
    return this.http.delete(this.dbUrl + id);
  }

  updatePatientImage(id: number, image: File) {
    return this.http.patch<Patient>(this.dbUrl + 'image/' + id, image);
  }
}
