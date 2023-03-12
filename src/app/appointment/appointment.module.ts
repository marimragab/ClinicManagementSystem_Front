import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';

@NgModule({
  declarations: [
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ListAppointmentsComponent,
  ],
  imports: [CommonModule],
  exports: [
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    ListAppointmentsComponent,
  ],
})
export class AppointmentModule {}
