import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClinicsRoutingModule } from './clinics-routing.module';
import { ClinicsListComponent } from './clinics-list/clinics-list.component';
import { ClinicsAddComponent } from './clinics-add/clinics-add.component';
import { ClinicsDetailsComponent } from './clinics-details/clinics-details.component';
import { ClinicEditByAdminComponent } from './clinic-edit-by-admin/clinic-edit-by-admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
//import { ClinicUpdateByManagerComponent } from './clinic-update-by-manager/clinic-update-by-manager.component';

@NgModule({
  declarations: [
    ClinicsListComponent,
    ClinicsAddComponent,
    ClinicsDetailsComponent,
    ClinicEditByAdminComponent,
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule,
    RouterModule,
    FormsModule,
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
  ],
  exports: [
    ClinicsListComponent,
    ClinicsAddComponent,
    ClinicsDetailsComponent,
    ClinicEditByAdminComponent,
    ReactiveFormsModule,
  ],
})
export class ClinicsModule {}
