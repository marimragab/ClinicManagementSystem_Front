import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';

const routes: Routes = [
  {path:"list",component:EmployeesListComponent},
  {path:"details/:id",component:EmployeesDetailsComponent},
  {path:"add",component:EmployeesAddComponent},
  {path:"edit/:id",component:EmployeesUpdateComponent},
  // {path:"delete/:id",component:EmployeesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
