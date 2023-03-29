import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment.module';
import { ClinicsModule } from './clinics/clinics.module';
import {EmployeesModule} from './employees/employees.module';
import {CoreModule}from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { PatientModule } from './patient/patient.module';
import { InvoiceModule } from './invoice/invoice.module';

import { RouterModule } from '@angular/router';


// import { HeaderComponent } from './core/header/header.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    EmployeesModule,
    ClinicsModule,
    AppointmentModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppointmentModule,
    PatientModule,
    InvoiceModule,
    RouterModule,
    CoreModule, MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
