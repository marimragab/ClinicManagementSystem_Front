import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponen } from './doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

const routes: Routes = [

  {path:"",component:DoctorListComponent},
  {path:"details/:id",component:DoctorDetailsComponent},
  {path:"add",component:DoctorAddComponen},
  {path:"edit/:id",component:DoctorEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
