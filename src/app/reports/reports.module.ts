import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { AllAppointmentComponent } from './all-appointment/all-appointment.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReportDailyAppointmentComponent } from './report-daily-appointment/report-daily-appointment.component';
import { ReportClinicDailyAppointmentComponent } from './report-clinic-daily-appointment/report-clinic-daily-appointment.component';
import { ReportDoctorDailyAppointmentComponent } from './report-doctor-daily-appointment/report-doctor-daily-appointment.component';
import { ReportPatientDailyAppointmentComponent } from './report-patient-daily-appointment/report-patient-daily-appointment.component';
import { ReportAppointmentReportForaDayComponent } from './report-appointment-report-fora-day/report-appointment-report-fora-day.component';
import { ReportClinicAppointmentReportForaDayComponent } from './report-clinic-appointment-report-fora-day/report-clinic-appointment-report-fora-day.component';
import { ReportDoctorAppointmentReportForaDayComponent } from './report-doctor-appointment-report-fora-day/report-doctor-appointment-report-fora-day.component';


@NgModule({
  declarations: [
    ReportsListComponent,
    AllAppointmentComponent,
    ReportDailyAppointmentComponent,
    ReportClinicDailyAppointmentComponent,
    ReportDoctorDailyAppointmentComponent,
    ReportPatientDailyAppointmentComponent,
    ReportAppointmentReportForaDayComponent,
    ReportClinicAppointmentReportForaDayComponent,
    ReportDoctorAppointmentReportForaDayComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    NgxMatTimepickerModule,
    MatTableModule,
    MatPaginatorModule
    
    
  ]
})
export class ReportsModule { }
