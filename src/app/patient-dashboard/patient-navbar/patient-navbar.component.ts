import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css'],
})
export class PatientNavbarComponent {
  @Output() toggleSidenavbarForMe: EventEmitter<any> = new EventEmitter();
  opensidenav() {
    this.toggleSidenavbarForMe.emit();
  }
}
