import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporEditComponent } from './repor-edit/repor-edit.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [

  {path:"list",component:ReportListComponent},
  {path:"details/:id",component:ReportDetailsComponent},
  {path:"add",component:ReportAddComponent},
  {path:"edit/:id",component:ReporEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
