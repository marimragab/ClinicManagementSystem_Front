import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';

@Component({
  selector: 'app-clinic-edit-by-admin',
  templateUrl: './clinic-edit-by-admin.component.html',
  styleUrls: ['./clinic-edit-by-admin.component.css']
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
  private clinicService: ClinicServicesService,public activatedroute:ActivatedRoute, public router: Router
) {}

data: string;
errorMessage: string;
doctors: any[];
// managers: any[];

clinicForm = new FormGroup({
  location: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        building: new FormControl('', [Validators.required]),
      }),
      mobilePhone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
      doctors: new FormControl('', [Validators.required]),
      // manager: new FormControl('', [Validators.required]),
      availability: new FormControl('', [Validators.required]),


});


get clinicValues() {
  return this.clinicForm.controls;
}

clinic:Clinics=new Clinics(0,{city:"",street:"",building:0},"",[],0,true);
ngOnInit(){
    this.activatedroute.params.subscribe(p=>{
      this.clinicService.getClincById(p['id']).subscribe((data:Clinics[])=>{
        this.clinic=data[0];
      })
    })
  }
updateclinic(clinic: Clinics) {
  console.log(this.clinicForm);
  console.log(this.clinicForm.value);

  this.clinicService.updateClinicByAdmin(clinic).subscribe({
    next: (data: any) => {
      this.data = data.Message;
      const form = document.getElementById(
        'clinicForm'
      ) as HTMLFormElement;
      form.reset();
    },
    error: (error) => {
      this.errorMessage = error;
      console.log(error);
    },
  });
}



onDoctorSelected(doctorId: number) {
  console.log(doctorId);
  const ChoosedDoctor: any = this.doctors.filter(
    (doctor) => doctor._id == doctorId
  );
  // console.log(ChoosedClinic[0].doctors);
  // this.doctors = ChoosedClinic[0].doctors;
}
}
