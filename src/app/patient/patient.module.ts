import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  declarations: [
    AddPatientComponent,
    UpdatePatientComponent,
    ListPatientsComponent,
    PatientDetailsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AddPatientComponent,
    UpdatePatientComponent,
    ListPatientsComponent,
    PatientDetailsComponent,
  ],
})
export class PatientModule {}
