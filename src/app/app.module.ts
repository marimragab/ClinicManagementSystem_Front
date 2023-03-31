import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment.module';
import { ClinicsModule } from './clinics/clinics.module';
import { EmployeesModule } from './employees/employees.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { PatientModule } from './patient/patient.module';
import { InvoiceModule } from './invoice/invoice.module';
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
import { PatientProfileComponent } from './pages/patient-profile/patient-profile.component';

import { MatCardModule } from '@angular/material/card';
// import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, PatientProfileComponent],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule],
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
    AdminModule,
    RouterModule,
    CoreModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class AppModule {}
