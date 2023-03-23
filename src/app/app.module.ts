import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PatientModule } from './patient/patient.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppointmentModule,
    PatientModule,
    InvoiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
