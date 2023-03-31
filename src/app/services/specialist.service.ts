import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialist } from '../models/specialist';
@Injectable({
    providedIn: 'root',
  })

  export class SpecialistService {
    
    baseurl='http://localhost:8080/specialties/';
  
    getAllSpecialis() {
        return this.http.get<Specialist[]>(this.baseurl);
      }
      getSpecialistById(id: number) {
        return this.http.get<Specialist[]>(this.baseurl + id);
      }
      addSpecialist(clinic: Specialist) {
        return this.http.post(this.baseurl, clinic);
      }
    
     
      updateSpecialist(sp: Specialist) {
        return this.http.put<Specialist>(this.baseurl + sp._id, sp);
      }
      deleteSpecialist(id: number) {
        return this.http.delete<Specialist>(this.baseurl + id);
      }
      constructor(public http: HttpClient) {}
  }