import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';


@NgModule({
  declarations: [
    PrescriptionListComponent,
    PrescriptionAddComponent,
    PrescriptionEditComponent,
    PrescriptionDetailsComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
