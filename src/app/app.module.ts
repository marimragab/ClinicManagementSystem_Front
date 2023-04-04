import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PatientModule } from './patient/patient.module';
import {DoctorModule} from './doctor/doctor.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {specialityModuel} from './Speciality/speciality.module'
import { PresciptionListComponent } from './presciption/presciption-list/presciption-list.component'
import {MaterialModuel} from '../material-Moduel'


@NgModule({
  declarations: [AppComponent, PresciptionListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppointmentModule,
    PatientModule,
    InvoiceModule,
    DoctorModule,
    BrowserAnimationsModule,
    MaterialModuel,specialityModuel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
