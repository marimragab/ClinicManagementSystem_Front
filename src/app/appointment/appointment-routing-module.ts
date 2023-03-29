import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component'; 
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';

const routes: Routes = [
  {path:"",component:AddAppointmentComponent},
  {path:"add",component:AddAppointmentComponent},
  {path:"details/:id",component:AppointmentDetailsComponent},
  {path:"list",component:ListAppointmentsComponent},
  {path:"edit/:id",component:UpdateAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicsRoutingModule { }