import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MaterialModuel} from '../../material-Moduel'
import { MatButtonModule } from '@angular/material/button';
import { SpecialitylistComponent } from './specialitylist/specialitylist.component';
import { Speciality } from '../models/speciality';



// import{DoctorRoutingModule} from './doctor-routing.module'

// import { AdddoctorComponent } from './adddoctor/adddoctor.component';
@NgModule({
  declarations: [
    SpecialitylistComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,MaterialModuel,
    MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule,
    
    
  ],
  exports:[
   SpecialitylistComponent,
    MatTableModule,
   
 
  ]
})
export class specialityModuel { }
