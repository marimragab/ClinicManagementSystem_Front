import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientPageComponent } from './patient-page.component';
import { SideBarComponent } from '../core/side-bar/side-bar.component';
import { CoreModule } from '../core/core.module';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';
import { PatientNavbarComponent } from './patient-navbar/patient-navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    PatientPageComponent,
    PatientSidebarComponent,
    PatientNavbarComponent,
    PatientProfileComponent,
  ],
  imports: [
    CommonModule,
    PatientDashboardRoutingModule,
    CoreModule,
    MatIconModule,
    MatListModule,
  ],
})
export class PatientDashboardModule {}
