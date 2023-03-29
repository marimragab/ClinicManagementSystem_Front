import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent {
  patient: Patient;
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatientById(id).subscribe((data) => {
      console.log(data);
      this.patient = data;
    });
  }
}
