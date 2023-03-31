import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
    baseurl = 'http://localhost:8080/report/';
    getAllAppointments() {
        return this.http.get<Appointment[]>(this.baseurl);
      }
    
    //   let date = new Date();
    getAppointmentForDay(date: Date){
       let d= String(date);
    const url = `http://localhost:8080/report/appointment/day?date=${d}`;
     
        return this.http.get<Appointment[]>(url );
      }
  constructor(public http: HttpClient) { }
}
