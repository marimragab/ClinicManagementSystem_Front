import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  { path: '', component: ListPatientsComponent },

  { path: 'list', component: ListPatientsComponent },
  {
    path: 'details/:id',
    component: PatientDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: UpdatePatientComponent,
  },
  { path: 'add', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
