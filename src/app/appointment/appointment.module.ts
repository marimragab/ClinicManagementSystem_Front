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
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ListAppointmentsComponent,
    AppointmentDetailsComponent,
    BookAppointmentComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    RouterModule,
    NgxMatTimepickerModule.setLocale('en-GB'),
    MatCardModule,
    MatListModule,
    MatRadioModule,
  ],
  exports: [
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ListAppointmentsComponent,
    AppointmentDetailsComponent,
    BookAppointmentComponent,
  ],
  providers: [],
})
export class AppointmentModule {}
