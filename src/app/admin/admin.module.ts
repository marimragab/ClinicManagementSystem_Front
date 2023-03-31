import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ClinicsModule } from '../clinics/clinics.module';
@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
   
    AdminViewComponent
  ],
  imports: [
    RouterModule,
    ClinicsModule,
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  exports:[
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,AdminViewComponent
  ]
})
export class AdminModule { }
