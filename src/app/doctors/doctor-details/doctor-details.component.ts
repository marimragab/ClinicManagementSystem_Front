import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Clinics, address } from 'src/app/models/clinics';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { ClinicServicesService } from '../../services/clinic-services.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent {
  id!: number;
  clinic_Id: number;
  add: any;
  doctors: Doctor[] = [];
  clinics: number[] = [];
  cli: any;
  
  clinic: Clinics;
  selectedClinic: number[] = [];
  doctor: Doctor = new Doctor(0, 0, '', '', 0, {}, 0, '', '', [], true);
  updatedUserData: Doctor = new Doctor(0,0,'','',0,{},0,'', '',[],true);

  constructor(
    private route: ActivatedRoute,
    public doctorServices: DoctorService,
    public clinicService: ClinicServicesService,
    public router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.doctorServices.getAllDoctors().subscribe((data) => {
      this.doctors = data;
      console.log(this.doctors);
      this.doctor = this.doctors.find(
        (doctor) => doctor._id == this.id
      ) as Doctor;
      this.clinic_Id = this.doctor.clinic[0];
      console.log(this.doctor.address['building'])
      console.log(this.doctor.clinic)

      this.clinics=this.doctor.clinic
        console.log(this.doctor.specialty)

      // //  const loc=localStorage.getItem('current_user')
      // //  console.log("hello"+loc);

      // const doctorData = localStorage.getItem('current_user');

      // // Parse the JSON string into an array of objects
      // const doctors = JSON.parse(doctorData);

      // // Access the _id property of the first element in the array
      // const doctorId = doctors[0]._id;

      // console.log(doctorId);
    });
    // this.clinicService.getAllClinc().subscribe((data) => {
    //   this.clinics = data;
    //   console.log(this.clinics);
    //   this.clinic = this.clinics.find((c) => c._id == 1) as Clinics;
    //   this.cli = this.clinic.location.city;
    // });
  }
}
