import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';

const routes: Routes = [

  {path:"list",component:MedicineListComponent},
  {path:"details/:id",component:MedicineDetailsComponent},
  {path:"add",component:MedicineAddComponent},
  {path:"edit/:id",component:MedicineEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }
