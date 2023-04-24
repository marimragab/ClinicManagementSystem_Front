import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
//import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MaterialModuel} from '../material.module'
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { DoctorListComponent } from './doctor-list/doctor-list.component';
import{DoctorsRoutingModule} from './doctors-routing.module'

import { DoctorAddComponen } from './doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import {DoctorDetailsComponent} from './doctor-details/doctor-details.component'



@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorAddComponen,
    DoctorEditComponent,
    DoctorDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModuel,
    MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule,
    DoctorsRoutingModule,MatSelectModule,NgSelectModule,FormsModule,MatSlideToggleModule
    
  ],
  exports:[
    DoctorListComponent,
    MatTableModule,
    
 
  ],

})
export class DoctorModule { }
