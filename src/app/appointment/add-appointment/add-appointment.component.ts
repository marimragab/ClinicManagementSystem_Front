import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { AppointmentService } from 'src/app/_services/appointment.service';
import { ClinicService } from 'src/app/_services/clinic.service';
import { DoctorService } from 'src/app/_services/doctor.service';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
})
export class AddAppointmentComponent implements OnInit {
  constructor(
    private appointmentService: AppointmentService,
    private clinicService: ClinicService,
    private dateAdapter: DateAdapter<Date>
  ) {}

  data: string;
  errorMessage: string;
  doctors: any[];
  clinics: any[];

  addAppointmentForm = new FormGroup({
    clinic: new FormControl('', [Validators.required]),

    doctor: new FormControl('', [Validators.required]),

    patient: new FormControl(0, [Validators.required]),

    // booked: new FormControl('', Validators.required),

    date: new FormControl('', [Validators.required]),

    timeFrom: new FormControl('', [
      Validators.required,
      Validators.pattern(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/),
    ]),

    timeTo: new FormControl('', [
      Validators.required,
      Validators.pattern(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/),
    ]),
  });

  get appointmentValues() {
    return this.addAppointmentForm.controls;
  }

  addAppointment(appointment: any) {
    console.log(this.addAppointmentForm);
    console.log(this.addAppointmentForm.value);

    this.appointmentService.addAppointment(appointment).subscribe({
      next: (data: any) => {
        this.data = data.Message;
        const form = document.getElementById(
          'addAppointmentForm'
        ) as HTMLFormElement;
        form.reset();
      },
      error: (error) => {
        this.errorMessage = error;
        console.log(error);
      },
    });
  }

  ngOnInit() {
    this.dateAdapter.setLocale('en-GB');
    this.clinicService.getAllClinics().subscribe((data: any) => {
      console.log('Clinics', data.Data);
      this.clinics = data.Data;
    });
  }

  onClinicSelected(clinicId: number) {
    console.log(clinicId);
    const ChoosedClinic: any = this.clinics.filter(
      (clinic) => clinic._id == clinicId
    );
    console.log(ChoosedClinic[0].doctors);
    this.doctors = ChoosedClinic[0].doctors;
  }
  onDoctorSelected(doctorId: number) {
    console.log(doctorId);
  }

  newdate: string = 'DD/MM/YYYY';
  dateChanges(dateChoiced: any) {
    console.log(dateChoiced);
    console.log(dateChoiced._model.selection);

    const selectedDate = dateChoiced._model.selection;
    const formattedDate = this.formatDate(selectedDate);

    this.addAppointmentForm.controls.date.setValue(formattedDate);
  }

  formatDate(choicedDate: any) {
    const date = new Date(choicedDate);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    this.newdate = formattedDate;
    console.log(this.newdate);
    return formattedDate;
  }
}
