import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {FormsModule,} from '@angular/forms';
import { SpecialistRoutingModule } from './specialist-routing.module';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';
import { SpecialistAddComponent } from './specialist-add/specialist-add.component';
import { SpecialistEditComponent } from './specialist-edit/specialist-edit.component';
import { SpecialistDetailsComponent } from './specialist-details/specialist-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    SpecialistListComponent,
    SpecialistAddComponent,
    SpecialistEditComponent,
    SpecialistDetailsComponent
  ],
  imports: [
    CommonModule,
    SpecialistRoutingModule,
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
       SpecialistListComponent,
      SpecialistAddComponent,
      SpecialistEditComponent,
      SpecialistDetailsComponent]
  
})
export class SpecialistModule { }
