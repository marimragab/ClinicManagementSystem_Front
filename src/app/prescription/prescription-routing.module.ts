import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';

const routes: Routes = [

  {path:"list",component:PrescriptionListComponent},
  {path:"details/:id",component:PrescriptionDetailsComponent},
  {path:"add",component:PrescriptionAddComponent},
  {path:"edit/:id",component:PrescriptionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
