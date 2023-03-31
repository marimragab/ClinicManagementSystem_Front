import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesAddComponent } from './employees-add/employees-add.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';
import { EmployessUpdateByManagerComponent } from './employess-update-by-manager/employess-update-by-manager.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesAddComponent,
    EmployeesDetailsComponent,
    EmployeesUpdateComponent,
    EmployessUpdateByManagerComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
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
     MatCardModule,
     MatProgressBarModule,
     MatDividerModule,
  ],
  exports :[ EmployeesListComponent,
    EmployeesAddComponent,
    EmployeesDetailsComponent,
    EmployeesUpdateComponent,
    EmployessUpdateByManagerComponent]
})
export class EmployeesModule { }
