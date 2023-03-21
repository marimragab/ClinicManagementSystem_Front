import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

@NgModule({
  declarations: [
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ListAppointmentsComponent,
    AppointmentDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ListAppointmentsComponent,
    AppointmentDetailsComponent,
  ],
})
export class AppointmentModule {}
