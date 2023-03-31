import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { ReportDailyAppointmentComponent } from './report-daily-appointment/report-daily-appointment.component';
import { ReportAppointmentReportForaDayComponent } from './report-appointment-report-fora-day/report-appointment-report-fora-day.component';
import { ReportClinicDailyAppointmentComponent } from './report-clinic-daily-appointment/report-clinic-daily-appointment.component';
import { ReportClinicAppointmentReportForaDayComponent } from './report-clinic-appointment-report-fora-day/report-clinic-appointment-report-fora-day.component';
import { ReportDoctorDailyAppointmentComponent } from './report-doctor-daily-appointment/report-doctor-daily-appointment.component';
import { ReportDoctorAppointmentReportForaDayComponent } from './report-doctor-appointment-report-fora-day/report-doctor-appointment-report-fora-day.component';
import { ReportPatientDailyAppointmentComponent } from './report-patient-daily-appointment/report-patient-daily-appointment.component';
import { ReportPatientAppointmentReportForaDayComponent } from './report-patient-appointment-report-fora-day/report-patient-appointment-report-fora-day.component';

const routes: Routes = [
  { path: 'list', component: ReportsListComponent },
  { path: 'allappointment', component: AllAppointmentComponent },
  { path: 'dailyappointment', component: ReportDailyAppointmentComponent },
  { path: 'allappointmentforaday', component: ReportAppointmentReportForaDayComponent },
  { path: 'dailyclinic', component: ReportClinicDailyAppointmentComponent },
  { path: 'clinicforaday', component: ReportClinicAppointmentReportForaDayComponent },
  { path: 'dailydoctor', component: ReportDoctorDailyAppointmentComponent },
  { path: 'doctorforaday', component: ReportDoctorAppointmentReportForaDayComponent },
  { path: 'dailypatient', component: ReportPatientDailyAppointmentComponent },
  { path: 'patientforaday', component: ReportPatientAppointmentReportForaDayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
