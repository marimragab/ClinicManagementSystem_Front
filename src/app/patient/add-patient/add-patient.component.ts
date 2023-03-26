import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
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
  data: string;
  errorMessage: string;
  addPatientForm: FormGroup;

  ngOnInit() {
    this.addPatientForm = new FormGroup({
      SSN: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?:2|3)\d{13}$/),
      ]),

      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      age: new FormControl(null, [Validators.required, Validators.min(5)]),
      city: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      building: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
    });
  }

  buttonDisabled: boolean = true;
  addPatient() {
    this.patientService.addPatient(this.newPatient).subscribe({
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

  onAddingPatient() {
    console.log(this.addPatientForm);
    if (this.addPatientForm.valid) {
      this.addPatient();
    } else {
    }
  }
}
