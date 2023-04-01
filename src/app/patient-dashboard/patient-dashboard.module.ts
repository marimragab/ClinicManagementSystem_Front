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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

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
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [PatientPageComponent],
})
export class PatientDashboardModule {}
