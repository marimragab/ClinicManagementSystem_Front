import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Doctor } from '../models/doctor';


@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  baseUrl = 'http://localhost:8080/doctors/';

  getAll() {
    return this.http.get<Doctor[]>(this.baseUrl);
  }

  constructor(public http: HttpClient) {}
  add(doc: Doctor) {
    return this.http.post<Doctor>(this.baseUrl, doc);
  }
  getById(id: number) {
    return this.http.get<Doctor>(this.baseUrl + id);
  }
  deleteById(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
  edit(doc: Doctor) {
   if(doc !== undefined)
         return this.http.patch(this.baseUrl + doc._id, doc);
   else
         return this.getAll();     
  }
  // findOne(id: number) {
  //    return this.getAll().pipe(
  //      map(doctors => doctors.find(doctor => doctor._id === id))
  //    );
  //  }

  // findOne(id: number): Doctor {
  //    const doctors = this.getAll();
  //    const doctor = doctors.find(doctor => doctor.id === id);
  //    console.log(`Found doctor with id ${id}:`, doctor);
  //    return doctor;
  //  }
}
