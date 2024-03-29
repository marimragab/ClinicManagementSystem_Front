import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponen } from './doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DocAppointComponent } from './doc-appoint/doc-appoint.component';
import { DashComponent } from './dash/dash.component';
import { AddpresComponent } from './addpres/addpres.component';
import { DocPresComponent } from './doc-pres/doc-pres.component';

const routes: Routes = [
  { path: '', component: DoctorListComponent },
  { path: 'details/:id', component: DoctorDetailsComponent },
  { path: 'add', component: DoctorAddComponen },
  { path: 'edit/:id', component: DoctorEditComponent },
  
  {
    path: 'dash',

    children: [
      { path: '', component: DashComponent },
      { path: 'docAppoint/:id', component: DocAppointComponent },
      { path: 'addpress/:id', component: AddpresComponent },
      { path: 'docPres/:id', component: DocPresComponent },
    ],
  },
];

// const route: Routes = [
//   // {
//   //   path: 'doctor/dash',
//   //   component: DashComponent,
//   //   children: [
// { path: 'docAppoint/:id', component: DocAppointComponent }
//     ]

//   // Other routes
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
