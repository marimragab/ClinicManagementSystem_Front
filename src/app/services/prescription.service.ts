import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  baseurl='http://localhost:8080/specialties/';
  
    getAllPrescription() {
        return this.http.get<Prescription[]>(this.baseurl);
      }
    getPrescriptionById(id: number) {
        return this.http.get<Prescription[]>(this.baseurl + id);
      }
      getPrescriptionByClinicId(clinic: number) {
        return this.http.get<Prescription[]>(this.baseurl + clinic);
      }
      getPrescriptionByDoctorId(doctor: number) {
        return this.http.get<Prescription[]>(this.baseurl + doctor);
      }
      getPrescriptionByPatientId(patient: number) {
        return this.http.get<Prescription[]>(this.baseurl + patient);
      }
      addPrescription(pres: Prescription) {
        return this.http.post(this.baseurl, pres);
      }
    
     
      updatePrescription(pres: Prescription) {
        return this.http.put<Prescription>(this.baseurl + pres._id, pres);
      }
      deletePrescription(id: number) {
        return this.http.delete<Prescription>(this.baseurl + id);
      }
      constructor(public http: HttpClient) {}
  }

