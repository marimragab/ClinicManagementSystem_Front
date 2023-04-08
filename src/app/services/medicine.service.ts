import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  baseurl = 'http://localhost:8080/medicines/';
  getAllMedicine() {
    return this.http.get<Medicine[]>(this.baseurl);
  }
  getMedicineById(id: number) {
    return this.http.get<Medicine[]>(this.baseurl + id);
  }
  addMedicine(med: Medicine) {
    return this.http.post(this.baseurl, med);
  }

  updateMedicine(id: number,med: Medicine) {
    return this.http.patch<Medicine>(this.baseurl +'admin/'  +id, med);
  }





  deleteMedicine(id: number) {
    return this.http.delete<Medicine>(this.baseurl + id);
  }
  constructor(public http: HttpClient) {}
}
