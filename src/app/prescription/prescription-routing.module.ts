import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { DetailsByClinicComponent } from './details-by-clinic/details-by-clinic.component';
import { DetailsByPaientComponent } from './details-by-paient/details-by-paient.component';
import { DetailsByDoctorComponent } from './details-by-doctor/details-by-doctor.component';

const routes: Routes = [

  {path:"list",component:PrescriptionListComponent},
  {path:"details/:id",component:PrescriptionDetailsComponent},
  {path:"add",component:PrescriptionAddComponent},
  {path:"edit/:id",component:PrescriptionEditComponent},
  {path:"detailsclinic/:id",component:DetailsByClinicComponent},
  {path:"detailspatient/:id",component:DetailsByPaientComponent},
  {path:"detailsdoctor/:id",component:DetailsByDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
