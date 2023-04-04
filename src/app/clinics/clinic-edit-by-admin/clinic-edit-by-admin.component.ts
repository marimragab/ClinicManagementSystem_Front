import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-clinic-edit-by-admin',
  templateUrl: './clinic-edit-by-admin.component.html',
  styleUrls: ['./clinic-edit-by-admin.component.css'],
})
export class ClinicEditByAdminComponent implements OnInit {
  //   doctor: number[]=[
  //     1,2,3,4
  //    ]
  //    manager: number[]=[
  //      1,2,3,4
  //    ]
  //   clinic:Clinics=new Clinics(0,{city:"",street:"",building:0},"",[],0,true);
  // ngOnInit(){
  //   this.activatedroute.params.subscribe(p=>{
  //     this.clinicsservices.getClincById(p['id']).subscribe((data:Clinics[])=>{
  //       this.clinic=data[0];
  //     })
  //   })
  // }
  // update(){
  // this.clinicsservices.updateClinicByAdmin(this.clinic).subscribe(data=>{
  //   console.log(data);
  //   console.log(this.clinic);
  //   this.router.navigateByUrl("/clinics")
  // })
  // }
  // reactiveForm = new FormGroup({
  //   location: new FormGroup({
  //     city: new FormControl(null),
  //     street: new FormControl(null),
  //     building: new FormControl(null),
  //   }),
  //   mobilePhone: new FormControl(null),
  //   doctors: new FormControl(null),
  //   manager: new FormControl(null),
  //   availability: new FormControl(null),
  // });
  //   constructor(public clinicsservices : ClinicServicesService, public activatedroute:ActivatedRoute, public router: Router){}

  constructor(
    private clinicService: ClinicServicesService,
    private doctoeService: DoctorService,
    public activatedroute: ActivatedRoute,
    public router: Router
  ) {}

  successMessage: string;
  errorMessage: string;
  doctors: any[];
  clinicId: number;
  managerName: string;

  clinicDoctors: any[];
  showForm: boolean = true;

  editClinicForm = new FormGroup({
    location: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      building: new FormControl(0, [Validators.required]),
    }),
    mobilePhone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    doctors: new FormControl([], [Validators.required]),
    manager: new FormControl('', [Validators.required]),
    availability: new FormControl(true, [Validators.required]),
  });

  get clinicValues() {
    return this.editClinicForm.controls;
  }

  clinic: any;
  ngOnInit() {
    this.getAllDoctors();
    this.activatedroute.params.subscribe((p) => {
      this.clinicService.getClincById(p['id']).subscribe((data: any) => {
        console.log(data);
        this.clinic = data.Data[0];
        console.log(this.clinic);
        this.clinicId = this.clinic._id;
        this.editClinicForm.patchValue({
          location: {
            city: this.clinic.location.city,
            street: this.clinic.location.street,
            building: this.clinic.location.building,
          },
          mobilePhone: this.clinic.mobilePhone,
          manager: this.clinic.manager._id,
          doctors: this.clinic.doctors,
          availability: this.clinic.availability,
        });
        console.log(this.clinic.doctors);
        this.clinicDoctors = this.clinic.doctors.map((doctor) => doctor._id);

        this.managerName = ` ${this.clinic.manager.firstName} ${this.clinic.manager.lastName}`;
      });
    });
  }
  updateClinic(clinic: any) {
    console.log(this.editClinicForm);
    console.log(this.editClinicForm.value);

    this.clinicService.updateClinicByAdmin(this.clinicId, clinic).subscribe({
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

  getAllDoctors() {
    this.doctoeService.getAllDoctors().subscribe((data: any) => {
      console.log(data);
      this.doctors = data.Data;
    });
  }
}
