import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { ViewEncapsulation} from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatIconModule } from "@angular/material/icon";
//import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MaterialModuel} from '../material.module'
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';



import { DoctorListComponent } from './doctor-list/doctor-list.component';
import{DoctorsRoutingModule} from './doctors-routing.module'

import { DoctorAddComponen } from './doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import {DoctorDetailsComponent} from './doctor-details/doctor-details.component';
import { DashComponent } from './dash/dash.component';
import { DocAppointComponent } from './doc-appoint/doc-appoint.component';
import { AddpresComponent } from './addpres/addpres.component';
import { DocPresComponent } from './doc-pres/doc-pres.component'



@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorAddComponen,
    DoctorEditComponent,
    DoctorDetailsComponent,
    DashComponent,
    DocAppointComponent,
    AddpresComponent,
    DocPresComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,MatToolbarModule,
    MaterialModuel,MatIconModule,
    MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule,MatListModule,
    DoctorsRoutingModule,MatSelectModule,NgSelectModule,FormsModule,MatSlideToggleModule,MatSidenavModule,
    MatDatepickerModule,MatNativeDateModule
    
  ],
  exports:[
    DoctorListComponent,
    MatTableModule,
    
 
  ],

})
export class DoctorModule { }
