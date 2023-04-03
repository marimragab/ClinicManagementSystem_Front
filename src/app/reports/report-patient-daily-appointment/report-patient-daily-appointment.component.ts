import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-patient-daily-appointment',
  templateUrl: './report-patient-daily-appointment.component.html',
  styleUrls: ['./report-patient-daily-appointment.component.css'],
})
export class ReportPatientDailyAppointmentComponent {
  constructor(
    private patientService: PatientService,
    private reportService: ReportService
  ) {}

  patients: Patient[];
  dailyAppointmentsForPatient: any[];
  noappointments: string;
  error: string = '';
  data: boolean = false;

  ngOnInit() {
    this.patientService.getAllPatients().subscribe((data: any) => {
      console.log('patients', data.Data);
      this.patients = data.Data;
    });
  }

  onPatientSelected(patientId: number) {
    console.log(patientId);
    this.data = false;
    this.error = '';
    this.noappointments = '';
    this.getPatientDailyAppointments(patientId);
  }

  getPatientDailyAppointments(patientId: number) {
    this.reportService.getDailyAppointmentsForPatient(patientId).subscribe({
      next: (data) => {
        console.log(data);
        if (data.length == 0) {
          this.noappointments = ' No Appointments for selected patient';
        } else {
          this.data = true;
          this.dailyAppointmentsForPatient = data;
        }
      },
      error: (error) => {
        console.log(error);
        this.error = error;
      },
    });
  }
}
