import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ClinicEditByAdminComponent } from './clinic-edit-by-admin/clinic-edit-by-admin.component';
import { ClinicsAddComponent } from './clinics-add/clinics-add.component';

import { ClinicsDetailsComponent } from './clinics-details/clinics-details.component';

import { ClinicsListComponent } from './clinics-list/clinics-list.component';

const routes: Routes = [
  {path:"list",component:ClinicsListComponent  },
  {path:"details/:id",component:ClinicsDetailsComponent},
  {path:"add",component:ClinicsAddComponent},
  {path:"editbyadmin/:id",component:ClinicEditByAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicsRoutingModule { }
