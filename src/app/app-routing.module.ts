import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';

const routes: Routes = [
  {path:"",component:DoctorListComponent},
  {path:"doctors",loadChildren:()=>import("./doctor/doctor.module").then(m=>m.DoctorModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
