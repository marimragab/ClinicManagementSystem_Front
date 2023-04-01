import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionRoutingModule } from './prescription-routing.module';
import { PrescriptionListComponent } from './prescription-list/prescription-list.component';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DetailsByClinicComponent } from './details-by-clinic/details-by-clinic.component';
import { DetailsByDoctorComponent } from './details-by-doctor/details-by-doctor.component';
import { DetailsByPaientComponent } from './details-by-paient/details-by-paient.component';


@NgModule({
  declarations: [
    PrescriptionListComponent,
    PrescriptionAddComponent,
    PrescriptionEditComponent,
    PrescriptionDetailsComponent,
    DetailsByClinicComponent,
    DetailsByDoctorComponent,
    DetailsByPaientComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PrescriptionListComponent,
    PrescriptionAddComponent,
    PrescriptionEditComponent,
    PrescriptionDetailsComponent,
    DetailsByClinicComponent,
    DetailsByDoctorComponent,
    DetailsByPaientComponent
  ]
})
export class PrescriptionModule { }
