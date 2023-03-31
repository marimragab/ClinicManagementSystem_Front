import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialistAddComponent } from './specialist-add/specialist-add.component';
import { SpecialistDetailsComponent } from './specialist-details/specialist-details.component';
import { SpecialistEditComponent } from './specialist-edit/specialist-edit.component';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';

const routes: Routes = [

  {path:"list",component:SpecialistListComponent},
  {path:"details/:id",component:SpecialistDetailsComponent},
  {path:"add",component:SpecialistAddComponent},
  {path:"edit/:id",component:SpecialistEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialistRoutingModule { }
