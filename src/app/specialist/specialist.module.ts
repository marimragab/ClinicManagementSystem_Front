import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialistRoutingModule } from './specialist-routing.module';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';
import { SpecialistAddComponent } from './specialist-add/specialist-add.component';
import { SpecialistEditComponent } from './specialist-edit/specialist-edit.component';
import { SpecialistDetailsComponent } from './specialist-details/specialist-details.component';


@NgModule({
  declarations: [
    SpecialistListComponent,
    SpecialistAddComponent,
    SpecialistEditComponent,
    SpecialistDetailsComponent
  ],
  imports: [
    CommonModule,
    SpecialistRoutingModule
  ]
})
export class SpecialistModule { }
