import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  constructor(public patientService: PatientService) {}
  data: string;
  errorMessage: string;
  //addPatientForm: FormGroup;

  addPatientForm = new FormGroup({
    SSN: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?:2|3)\d{13}$/),
    ]),

    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl('', [Validators.required, Validators.min(5)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      building: new FormControl('', Validators.required),
    }),
  });

  get patientValues() {
    return this.addPatientForm.controls;
  }

  addPatient(patient: any) {
    console.log(this.addPatientForm);
    console.log(this.addPatientForm.value);

    this.patientService.addPatient(patient).subscribe({
      next: (data: any) => {
        this.data = data.Message;
        const form = document.getElementById(
          'addPatientForm'
        ) as HTMLFormElement;
        form.reset();
      },
      error: (error) => {
        this.errorMessage = error;
        console.log(error);
      },
    });
  }
}
