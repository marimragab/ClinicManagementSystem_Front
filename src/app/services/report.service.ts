import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
@Injectable({
  providedIn: 'root',
})
export class ReportService {
  baseurl = 'http://localhost:8080/report/';
  getAllAppointments() {
    return this.http.get<Appointment[]>(this.baseurl);
  }

  //Get all appointments for entered date
  getAppointmentForDay(date: string) {
    const url = `http://localhost:8080/report/appointment/day?date=${date}`;
    return this.http.get<Appointment[]>(url);
  }

  //Get all appointments for the current day
  getDailyAppointments() {
    return this.http.get<Appointment[]>(this.baseurl + 'appointment/daily');
  }

  //Get Appointments of specific clinic at current day
  getClinicAppointmentsAtToday(id: number) {
    return this.http.get<Appointment[]>(
      this.baseurl + 'appointment/daily/clinic/' + id
    );
  }

  //Get daily appointmets of patient
  getDailyAppointmentsForPatient(id: number) {
    return this.http.get<Appointment[]>(
      this.baseurl + 'appointment/daily/patient/' + id
    );
  }

  //Get daily appointmets of doctor
  getDailyAppointmentsForDoctor(id: number) {
    return this.http.get<Appointment[]>(
      this.baseurl + 'appointment/daily/doctor/' + id
    );
  }

  //Get appointments for doctor at selected day
  getDoctorAppointmentsOnDay(date: string, id: number) {
    return this.http.get<Appointment[]>(
      `${this.baseurl}appointment/day/doctor/${id}?date=${date}`
    );
  }

  //Get appointments for patient at selected day
  getPatientAppointmentsOnDay(date: string, id: number) {
    return this.http.get<Appointment[]>(
      `${this.baseurl}appointment/day/patient/${id}?date=${date}`
    );
  }
  constructor(public http: HttpClient) {}
}
