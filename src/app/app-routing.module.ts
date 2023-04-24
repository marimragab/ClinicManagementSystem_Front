import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { ClinicsListComponent } from './clinics/clinics-list/clinics-list.component';
// import { ClinicsDetailsComponent } from './clinics/clinics-details/clinics-details.component';
// import { ClinicsAddComponent } from './clinics/clinics-add/clinics-add.component';
// import { ClinicEditByAdminComponent } from './clinics/clinic-edit-by-admin/clinic-edit-by-admin.component';
// import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
// import { EmployeesDetailsComponent } from './employees/employees-details/employees-details.component';
// import { EmployeesAddComponent } from './employees/employees-add/employees-add.component';
// import { EmployeesUpdateComponent } from './employees/employees-update/employees-update.component';
// import { ListPatientsComponent } from './patient/list-patients/list-patients.component';
// import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
// import { AppointmentDetailsComponent } from './appointment/appointment-details/appointment-details.component';
// import { UpdateAppointmentComponent } from './appointment/update-appointment/update-appointment.component';
// import { ListAppointmentsComponent } from './appointment/list-appointments/list-appointments.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientProfileComponent } from './patient-dashboard/patient-profile/patient-profile.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { DoctorprofileComponent } from './doctor-profile/doctorprofile/doctorprofile.component';
//import { ClinicUpdateByManagerComponent } from './clinics/clinic-update-by-manager/clinic-update-by-manager.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminViewComponent },
  { path: 'doctor/dashboard', component: DoctorprofileComponent },
  // { path: 'patient/profile', component: PatientProfileComponent },

  // { path: 'clinics', component: ClinicsListComponent },
  // { path: 'clinics/details/:id', component: ClinicsDetailsComponent },
  // { path: 'clinics/add', component: ClinicsAddComponent },
  // { path: 'clinics/editbyadmin/:id', component: ClinicEditByAdminComponent },
  // {
  //   path: 'clinics/editbymanager/:id',
  //   component: ClinicEditByAdminComponent,
  // },
  // {
  //   path: 'patient',
  //   loadChildren: () =>
  //     import('./patient/patient.module').then((m) => m.PatientModule),
  // },

  // {
  //   path: 'patient',
  //   loadChildren: () =>
  //     import('./patient/patient.module').then((m) => m.PatientModule),
  // },

  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },

  {
    path: 'patient',
    loadChildren: () =>
      import('./patient-dashboard/patient-dashboard.module').then(
        (m) => m.PatientDashboardModule
      ),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctors/doctors.module').then(
        (m) => m.DoctorModule
      ),
  },
  // { path: 'clinics', component: ClinicsListComponent },
  // { path: 'clinics/details/:id', component: ClinicsDetailsComponent },
  // { path: 'clinics/add', component: ClinicsAddComponent },
  // { path: 'clinics/editbyadmin/:id', component: ClinicEditByAdminComponent },
  // {
  //   path: 'clinics/editbymanager/:id',
  //   component: ClinicEditByManagerComponent,
  // },
  // {
  //   path: 'patient',
  //   loadChildren: () =>
  //     import('./patient/patient.module').then((m) => m.PatientModule),
  // },
  //{path:"clinics/editbymanager/:id",component:ClinicUpdateByManagerComponent},
  // {path:"employees",loadChildren:()=>import("./employees/employees.module").then(m=>m.EmployeesModule)},

  // { path: 'employees', component: EmployeesListComponent },
  // { path: 'employees/details/:id', component: EmployeesDetailsComponent },
  // { path: 'employees/add', component: EmployeesAddComponent },
  // { path: 'employees/edit/:id', component: EmployeesUpdateComponent },
  // {
  //   path: 'employees/editbymanager/:id',
  //   component: EmployessUpdateByManagerComponent,
  // },

  // { path: 'appointment', component: AddAppointmentComponent },
  // { path: 'appointment/details/:id', component: AppointmentDetailsComponent },
  // { path: 'appointment/add', component: AddAppointmentComponent },
  // { path: 'appointment/edit/:id', component: UpdateAppointmentComponent },
  // { path: 'appointment/list', component: ListAppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
