import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from '../appointment/add-appointment/add-appointment.component';
import { PatientPageComponent } from './patient-page.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PatientPageComponent,
    children: [
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      { path: 'profile', component: PatientProfileComponent },
      { path: 'appointment/book', component: AddAppointmentComponent },

      //routes for invoices: see his daily invoice after doing reports
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDashboardRoutingModule {}
