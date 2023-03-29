import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Clinics} from '../models/clinics'
import {address} from '../models/clinics'
@Injectable({
  providedIn: 'root'
})
export class ClinicServicesService {
  baseurl ="http://localhost:8080/clinics/"
  getAllClinc(){
    return this.http.get<Clinics[]>(this.baseurl)
  }
 getClincById(id:number) {
  return this.http.get<Clinics[]>(this.baseurl+id)
 }
 addClinic(clinic:Clinics){
  return this.http.post(this.baseurl,clinic)
 }
 
 updateClinicByManager(clinic:Clinics){
  return this.http.put<Clinics>(this.baseurl+clinic._id,clinic)
}

updateClinicByAdmin(clinic:Clinics){
  return this.http.put<Clinics>(this.baseurl+clinic._id,clinic)
}
deleteById(id:number) {
  return this.http.delete<Clinics>(this.baseurl+id)
 }
  constructor(public http:HttpClient) { }
}
