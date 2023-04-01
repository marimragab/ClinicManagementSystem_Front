import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css'],
})
export class PatientSidebarComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  logout() {
    localStorage.removeItem('current_user');
  }
}
