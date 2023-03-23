import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  dbUrl: string = 'http://localhost:8080/patients/';

  getAllPatients() {
    return this.http.get<Patient[]>(this.dbUrl);
  }

  getPatientById(id: number) {
    return this.http.get<Patient>(this.dbUrl + id);
  }

  addPatient(newPatient: Patient) {
    return this.http.post<Patient>(this.dbUrl, newPatient);
  }

  updatePatient(id: number, patient: Patient) {
    return this.http.patch<Patient>(this.dbUrl + id, patient);
  }

  deletePatientById(id: number) {
    return this.http.delete(this.dbUrl + id);
  }
}
