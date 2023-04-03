import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-doctor-daily-appointment',
  templateUrl: './report-doctor-daily-appointment.component.html',
  styleUrls: ['./report-doctor-daily-appointment.component.css'],
})
export class ReportDoctorDailyAppointmentComponent {
  constructor(
    private doctorService: DoctorService,
    private reportService: ReportService
  ) {}

  doctors: any[];
  dailyAppointmentsForDoctor: any[];
  noappointments: string;
  error: string = '';
  data: boolean = false;

  ngOnInit() {
    this.doctorService.getAllDoctors().subscribe((data: any) => {
      console.log('doctors', data.Data);
      this.doctors = data.Data;
    });
  }

  onDoctorSelected(doctorId: number) {
    console.log(doctorId);
    this.data = false;
    this.error = '';
    this.noappointments = '';
    this.getDoctorDailyAppointments(doctorId);
  }

  getDoctorDailyAppointments(doctorId: number) {
    this.reportService.getDailyAppointmentsForDoctor(doctorId).subscribe({
      next: (data) => {
        console.log(data);
        if (data.length == 0) {
          this.noappointments = ' No Appointments for selected doctor';
        } else {
          this.data = true;
          this.dailyAppointmentsForDoctor = data;
        }
      },
      error: (error) => {
        console.log(error);
        this.error = error;
      },
    });
  }
}
