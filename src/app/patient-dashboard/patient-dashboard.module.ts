import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientPageComponent } from './patient-page.component';
import { SideBarComponent } from '../core/side-bar/side-bar.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PatientPageComponent],
  imports: [CommonModule, PatientDashboardRoutingModule, CoreModule],
})
export class PatientDashboardModule {}
