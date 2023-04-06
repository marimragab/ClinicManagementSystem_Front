import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from '../appointment/add-appointment/add-appointment.component';
import { BookAppointmentComponent } from '../appointment/book-appointment/book-appointment.component';
import { PatientPageComponent } from './patient-page.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PatientPageComponent,
    children: [
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      { path: 'profile', component: PatientProfileComponent },
      { path: 'appointment/book', component: BookAppointmentComponent },

      //routes for invoices: see his daily invoice after doing reports
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDashboardRoutingModule {}
