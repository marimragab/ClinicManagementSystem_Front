import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';


@NgModule({
  declarations: [
    MedicineListComponent,
    MedicineAddComponent,
    MedicineEditComponent,
    MedicineDetailsComponent
  ],
  imports: [
    CommonModule,
    MedicinesRoutingModule
  ]
})
export class MedicinesModule { }
