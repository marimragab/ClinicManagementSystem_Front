import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from '../appointment/add-appointment/add-appointment.component';
import { AppointmentDetailsComponent } from '../appointment/appointment-details/appointment-details.component';
import { ListAppointmentsComponent } from '../appointment/list-appointments/list-appointments.component';
import { UpdateAppointmentComponent } from '../appointment/update-appointment/update-appointment.component';
import { ClinicEditByAdminComponent } from '../clinics/clinic-edit-by-admin/clinic-edit-by-admin.component';
import { ClinicsAddComponent } from '../clinics/clinics-add/clinics-add.component';
import { ClinicsDetailsComponent } from '../clinics/clinics-details/clinics-details.component';
import { ClinicsListComponent } from '../clinics/clinics-list/clinics-list.component';
import { DoctorAddComponent } from '../doctors/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from '../doctors/doctor-details/doctor-details.component';
import { DoctorEditComponent } from '../doctors/doctor-edit/doctor-edit.component';
import { DoctorListComponent } from '../doctors/doctor-list/doctor-list.component';
import { EmployeesAddComponent } from '../employees/employees-add/employees-add.component';
import { EmployeesDetailsComponent } from '../employees/employees-details/employees-details.component';
import { EmployeesListComponent } from '../employees/employees-list/employees-list.component';
import { EmployeesUpdateComponent } from '../employees/employees-update/employees-update.component';
import { EmployessUpdateByManagerComponent } from '../employees/employess-update-by-manager/employess-update-by-manager.component';
import { MedicineAddComponent } from '../medicines/medicine-add/medicine-add.component';
import { MedicineDetailsComponent } from '../medicines/medicine-details/medicine-details.component';
import { MedicineEditComponent } from '../medicines/medicine-edit/medicine-edit.component';
import { MedicineListComponent } from '../medicines/medicine-list/medicine-list.component';
import { PrescriptionAddComponent } from '../prescription/prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from '../prescription/prescription-details/prescription-details.component';
import { PrescriptionEditComponent } from '../prescription/prescription-edit/prescription-edit.component';
import { PrescriptionListComponent } from '../prescription/prescription-list/prescription-list.component';

import { SpecialistAddComponent } from '../specialist/specialist-add/specialist-add.component';
import { SpecialistDetailsComponent } from '../specialist/specialist-details/specialist-details.component';
import { SpecialistEditComponent } from '../specialist/specialist-edit/specialist-edit.component';
import { SpecialistListComponent } from '../specialist/specialist-list/specialist-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ReportsListComponent } from '../reports/reports-list/reports-list.component';
import { AllAppointmentComponent } from '../reports/all-appointment/all-appointment.component';
import { DetailsByDoctorComponent } from '../prescription/details-by-doctor/details-by-doctor.component';
import { DetailsByPaientComponent } from '../prescription/details-by-paient/details-by-paient.component';
import { DetailsByClinicComponent } from '../prescription/details-by-clinic/details-by-clinic.component';

const routes: Routes = [
  {path:"",redirectTo:"adminhome", pathMatch:"full"},
  {path:"adminhome",component:AdminHomeComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"adminheader",component:AdminHeaderComponent},
  {path:"adminsidenav",component:AdminSidenavComponent},
  {path:"adminview",component:AdminViewComponent},


  { path: 'clinics', component: ClinicsListComponent },
  { path: 'clinics/details/:id', component: ClinicsDetailsComponent },
  { path: 'clinics/add', component: ClinicsAddComponent },
  { path: 'clinics/editbyadmin/:id', component: ClinicEditByAdminComponent },



  { path: 'doctor', component: DoctorListComponent },
  { path: 'doctor/details/:id', component: DoctorDetailsComponent },
  { path: 'doctor/add', component: DoctorAddComponent },
  { path: 'doctor/edit/:id', component: DoctorEditComponent },


  {path:"medicine",component:MedicineListComponent},
  {path:"medicine/details/:id",component:MedicineDetailsComponent},
  {path:"medicine/add",component:MedicineAddComponent},
  {path:"medicine/edit/:id",component:MedicineEditComponent},


  {path:"prescription",component:PrescriptionListComponent},
  {path:"prescription/details/:id",component:PrescriptionDetailsComponent},
  {path:"prescription/add",component:PrescriptionAddComponent},
  {path:"prescription/edit/:id",component:PrescriptionEditComponent},
  {path:"prescription/detailsclinic/:id",component:DetailsByClinicComponent},
  {path:"prescription/detailspatient/:id",component:DetailsByPaientComponent},
  {path:"prescription/detailsdoctor/:id",component:DetailsByDoctorComponent},



  {path:"report",component:ReportsListComponent},
  {path:"report/allappointment",component:AllAppointmentComponent},
  {
    path: 'report',
    loadChildren: () =>
      import('../reports/reports.module').then((m) => m.ReportsModule),
  },


  {path:"specialist",component:SpecialistListComponent},
  {path:"specialist/details/:id",component:SpecialistDetailsComponent},
  {path:"specialist/add",component:SpecialistAddComponent},
  {path:"specialist/edit/:id",component:SpecialistEditComponent},













  {
    path: 'patient',
    loadChildren: () =>
      import('../patient/patient.module').then((m) => m.PatientModule),
  },

  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/details/:id', component: EmployeesDetailsComponent },
  { path: 'employees/add', component: EmployeesAddComponent },
  { path: 'employees/edit/:id', component: EmployeesUpdateComponent },
  {
    path: 'employees/editbymanager/:id',
    component: EmployessUpdateByManagerComponent,
  },

  { path: 'appointment', component: AddAppointmentComponent },
  { path: 'appointment/details/:id', component: AppointmentDetailsComponent },
  { path: 'appointment/add', component: AddAppointmentComponent },
  { path: 'appointment/edit/:id', component: UpdateAppointmentComponent },
  { path: 'appointment/list', component: ListAppointmentsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
