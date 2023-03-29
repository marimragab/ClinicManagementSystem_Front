import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../_models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  dbUrl: string = 'http://localhost:8080/appointments/';
  //Functionality for admin only.
  getAllAppointments() {
    return this.http.get<Appointment[]>(this.dbUrl);
  }

  getAppointmentById(id: number) {
    return this.http.get<Appointment>(this.dbUrl + id);
  }

  addAppointment(newAppointment: Appointment) {
    return this.http.post<Appointment>(this.dbUrl, newAppointment);
  }

  updateAppointmentById(id: number, appointment: Appointment) {
    return this.http.patch<Appointment>(this.dbUrl + id, appointment);
  }

  deleteAppointmentById(id: number) {
    return this.http.delete(this.dbUrl + id);
  }

  //Functionality For Patient
  bookAppointment(id: number, patientId: number) {
    return this.http.patch(this.dbUrl + 'book/' + id, patientId);
  }
}
