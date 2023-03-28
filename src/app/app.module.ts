import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentModule } from './appointment/appointment.module';
import { ClinicsModule } from './clinics/clinics.module';
import {EmployeesModule} from './employees/employees.module';
import {CoreModule}from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

// import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [AppComponent],
  imports:[MatSlideToggleModule,BrowserModule, AppRoutingModule, AppointmentModule, HttpClientModule, ClinicsModule,FormsModule,RouterModule,EmployeesModule,CoreModule, BrowserAnimationsModule, MatTableModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
