import { Component, ViewEncapsulation } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Specialist } from 'src/app/models/specialist';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { ReportService } from 'src/app/services/report.service';
import { SpecialistService } from 'src/app/services/specialist.service';
import { formatDate } from './../add-appointment/add-appointment.component';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class BookAppointmentComponent {
  constructor(
    private specialtyService: SpecialistService,
    private doctorService: DoctorService,
    private reportService: ReportService,
    private appointmentService: AppointmentService
  ) {}
  selectedSpecialty: string;
  selectedDoctorId: number;
  selectedDate: string;
  selectedAppointmentId: number;
  specialties: Specialist[];
  allDoctors: any[];
  selectedDoctorAvailableAppointments: Appointment[];
  doctorsWithSelectedSpecialty: any[];

  ngOnInit() {
    this.specialtyService.getAllSpecialis().subscribe((data: any) => {
      console.log(data.Data);
      this.specialties = data.Data;
    });
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.doctorService.getAllDoctors().subscribe((data: any) => {
      this.allDoctors = data.Data;
      console.log('doctors', this.allDoctors);
    });
  }

  onSpecialtyChange(specialty: string) {
    console.log(specialty);

    const filteredDoctors = this.allDoctors.filter(
      (doctor) => doctor.specialty.specialty === specialty
    );
    this.doctorsWithSelectedSpecialty = filteredDoctors;
    console.log(filteredDoctors);
  }

  onDoctorChange(doctorId: number) {
    console.log(doctorId);
    this.selectedDoctorId = doctorId;
  }

  dateChanged(date: any) {
    console.log(date);
    //The date send as 04/04/2023 and saved on db as 4/4/2023 solve that later
    this.selectedDate = formatDate(date);
    console.log(this.selectedDate);
    this.reportService
      .getDoctorAppointmentsOnDay(this.selectedDate, this.selectedDoctorId)
      .subscribe({
        next: (doctorAppointments) => {
          console.log(doctorAppointments);

          this.selectedDoctorAvailableAppointments = doctorAppointments.filter(
            (a) => a.booked == false
          );
          console.log(this.selectedDoctorAvailableAppointments);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  selectAppointment(appointment: any) {
    console.log(appointment);
    console.log(appointment._id);

    //you want to get patient id if logged from userinfo if not logged trying to
    //book appointment from home page (solve later)
    // console.log(appointment.patient._id);

    this.selectedAppointmentId = appointment._id;
    console.log(this.selectedAppointmentId);
  }

  bookAppointment() {
    this.appointmentService
      .bookAppointment(this.selectedAppointmentId, 15)
      .subscribe((data) => {
        console.log(data);
      });
  }

  //Access to XMLHttpRequest at 'http://localhost:8080/appointments/book/24' from origin
  // 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
  //header is present on the requested resource.

  //this error raises when click book appointment solve it later
}
