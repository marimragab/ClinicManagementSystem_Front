import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent {
  constructor(
    private user: AuthService,
    private patientService: PatientService
  ) {}
  //updatedUser: Patient;
  userInfo: any;
  role: string = 'patient';
  ngOnInit(): void {
    this.userInfo = this.user.getUser();
    console.log(this.userInfo);
  }

  updateUserData() {
    this.patientService.updatePatient(this.userInfo._id, this.userInfo);
  }
}
