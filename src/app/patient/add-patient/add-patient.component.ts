import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  constructor(public patientService: PatientService) {}
  newPatient: Patient = new Patient(
    0,
    0,
    '',
    '',
    0,
    { city: '', street: '', building: 0 },
    '',
    '',
    ''
  );

  buttonDisabled: boolean = true;
  addPatient() {
    this.patientService
      .addPatient(this.newPatient)
      .subscribe((message: any) => {
        console.log(message);
        if (message.Success == 'true') {
          this.buttonDisabled = false;
          const form = document.getElementById(
            'addPatientForm'
          ) as HTMLFormElement;
          form.reset();
        } else {
        }
      });
  }
}
