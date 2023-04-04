import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
// import { DepartmentUpdateComponent } from './department-update/department-update.component';

const routes: Routes = [
  // {path:"details/:id",component:DepartmentDetailsComponent},
  { path: "add", component: AdddoctorComponent },
  {path:"update/:id",component:UpdateDoctorComponent},
  { path: "", component: DoctorListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
