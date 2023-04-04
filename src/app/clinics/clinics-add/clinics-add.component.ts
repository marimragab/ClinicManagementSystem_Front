import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Clinics, address } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-clinics-add',
  templateUrl: './clinics-add.component.html',
  styleUrls: ['./clinics-add.component.css'],
})
export class ClinicsAddComponent {
  // data: string;
  // errorMessage: string;
  // doctors: any[];
  // managers: any[];
  //clinic: Clinics = new Clinics(0, { city: '', street: '', building: 0 }, '');
  // errorMessage: any;
  // save(clinic: any) {
  // this.clinicservices.addClinic(this.clinic).subscribe(data=>{
  //     console.log(data);
  //     this.router.navigateByUrl("/clinics");
  //    })
  //   console.log(clinic);
  //   this.clinicservices.addClinic(clinic).subscribe({
  //     next: (data: any) => {
  //       this.data = data.Message;
  //       const form = document.getElementById(
  //         'addclinic'
  //       ) as HTMLFormElement;
  //       form.reset();
  //     },
  //     error: (error) => {
  //       this.errorMessage = error;
  //       console.log(error);
  //     },
  //   })
  // }
  // onDoctorSelected(doctorId: number) {
  //   console.log(doctorId);
  //   const ChoosedClinic: any = this.doctors.filter(
  //     (data) => data._id == doctorId
  //   );}
  // //reactiveForm: FormGroup;
  // constructor(
  //   public clinicservices: ClinicServicesService,
  //   public router: Router, public doctorService : DoctorService
  // ) {}

  // reactiveForm = new FormGroup({
  //   location: new FormGroup({
  //     city: new FormControl('', [Validators.required]),
  //     street: new FormControl('', [Validators.required]),
  //     building: new FormControl('', [Validators.required]),
  //   }),
  //   mobilePhone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  //   doctors: new FormControl('', [Validators.required]),
  //   manager: new FormControl('', [Validators.required]),
  //   availability: new FormControl('', [Validators.required]),
  // });
  // get clinicValues() {
  //   return this.reactiveForm.controls;
  // }

  constructor(
    private clinicService: ClinicServicesService,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  successMessage: string;
  errorMessage: string;
  doctors: any[];
  showForm: boolean = true;
  // managers: any[];

  clinicForm = new FormGroup({
    location: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      building: new FormControl('', [Validators.required]),
    }),
    mobilePhone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    doctors: new FormControl('', [Validators.required]),
    manager: new FormControl('', [Validators.required]),
    // availability: new FormControl('', [Validators.required]),
  });

  get clinicValues() {
    return this.clinicForm.controls;
  }
  addclinic(clinic: any) {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.clinicForm);
    console.log(this.clinicForm.value);
    console.log(clinic);
    this.clinicService.addClinic(clinic).subscribe({
      next: (data: any) => {
        console.log(data);
        this.successMessage = data.Message;
        const form = document.getElementById('clinicForm') as HTMLFormElement;
        form.reset();
        this.showForm = false;
      },
      error: (error) => {
        this.errorMessage = error;
        console.log(error);
      },
    });
  }

  // onDoctorSelected(doctorId: number) {
  //   console.log(doctorId);
  //   const ChoosedDoctor: any = this.doctors.filter(
  //     (doctor) => doctor._id == doctorId
  //   );

  // }

  // (selectionChange)="onDoctorSelected($event.value)"

  ngOnInit() {
    this.doctorService.getAllDoctors().subscribe((data: any) => {
      this.doctors = data.Data;
    });
  }

  // onManagerSelected(managerId: number) {
  //   console.log(managerId);
  //   const ChoosedManager: any = this.managers.filter(
  //     (manager) => manager._id == managerId
  //   );
  // }
}

// (selectionChange)="onMangerSelected($event.value)"
