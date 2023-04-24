import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
// import { AppointmentModule } from './appointment/appointment.module';
// import { ClinicsModule } from './clinics/clinics.module';
// import { EmployeesModule } from './employees/employees.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
// import { PatientModule } from './patient/patient.module';
// import { InvoiceModule } from './invoice/invoice.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { JwtInterceptor } from './guard/jwt.interceptor';
import { AuthService } from './services/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentModule } from './appointment/appointment.module';
import { MatCardModule } from '@angular/material/card';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PatientDashboardModule } from './patient-dashboard/patient-dashboard.module';
// import { mat } from './material.module';
// import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomepageComponent],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule],
  imports: [
    // EmployeesModule,
    // ClinicsModule,
    // AppointmentModule,
    AppointmentModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AppointmentModule,
    // PatientModule,
    // InvoiceModule,
    AdminModule,
    RouterModule,
    CoreModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    PatientDashboardModule,
    
  ],
})
export class AppModule {}
