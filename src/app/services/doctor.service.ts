import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Doctor} from '../models/doctor'

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  dbUrl: string = 'http://localhost:8080/doctors/';

 

  getAllDoctors() {
    return this.http.get<Doctor[]>(this.dbUrl);
  }


  add(doc: Doctor) {
    return this.http.post<Doctor>(this.dbUrl, doc);
  }
  getById(id: number) {
    return this.http.get<Doctor>(this.dbUrl + id);
  }
  deleteById(id: number) {
    return this.http.delete(this.dbUrl + id);
  }
  edit(id,doc: Doctor) {
   if(doc !== undefined)
         return this.http.patch(this.dbUrl + id, doc);
   else
         return this.getAllDoctors();     
  }
}
