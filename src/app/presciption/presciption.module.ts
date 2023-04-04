import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MaterialModuel} from '../../material-Moduel'
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTableModule,FormsModule,MatFormFieldModule,
    ReactiveFormsModule,MatInputModule,MaterialModuel,
    MatButtonModule
  ]
})
export class PresciptionModule { }
