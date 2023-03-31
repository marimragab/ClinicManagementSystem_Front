import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  {path:"",redirectTo:"adminhome", pathMatch:"full"},
  {path:"adminhome",component:AdminHomeComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"adminheader",component:AdminHeaderComponent},
  {path:"adminsidenav",component:AdminSidenavComponent},
  {path:"adminview",component:AdminViewComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
