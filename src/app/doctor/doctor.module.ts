import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MaterialModuel} from '../../material-Moduel'
import { MatButtonModule } from '@angular/material/button';


import { DoctorListComponent } from './doctor-list/doctor-list.component';
import{DoctorRoutingModule} from './doctor-routing.module'

import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';



@NgModule({
  declarations: [
    DoctorListComponent,
    AdddoctorComponent,
    UpdateDoctorComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,MaterialModuel,
    MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule,
    DoctorRoutingModule
    
  ],
  exports:[
    DoctorListComponent,
    MatTableModule,
    
 
  ]
})
export class DoctorModule { }
