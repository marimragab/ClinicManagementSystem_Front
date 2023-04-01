import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescription-add',
  templateUrl: './prescription-add.component.html',
  styleUrls: ['./prescription-add.component.css']
})
export class PrescriptionAddComponent {



  clinic: Clinics[]=[];
  patient:Patient[]=[];
  doctor: Doctor[]=[];

  pres: Prescription = new Prescription(0,{medicineId:0,quantity:"",medicineDosage:""},"","","",0,0,0);
  save(pres: any) {
    // this.clinicservices.addClinic(this.clinic).subscribe(data=>{
    //     console.log(data);
    //     this.router.navigateByUrl("/clinics");
    //    })
    console.log(pres);
    this.presService.addPrescription(pres).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/prescription');
    });
  }
  //reactiveForm: FormGroup;
  constructor(
    public presService: PrescriptionService,
    public router: Router
  ) {}

  reactiveForm = new FormGroup({
    clinic:new FormControl(null),
    doctor :new FormControl(null),
    patient:new FormControl(null),
    medicine: new FormGroup({
      medicineId: new FormControl(null),
      quantity: new FormControl(null),
      medicineDosage: new FormControl(null),
    }),
    notes: new FormControl(null),
    date: new FormControl(null),
    time: new FormControl(null),
  });
}
// export interface Medicine{
//   medicineId:number,  quantity:string,  medicineDosage:string
// }


// export class Prescription {
//   constructor(public _id:number, public clinic:number, public doctor:number, public patient: number
//       ,public medicine:Medicine, public notes:string,public date: string, public time: string){}
// }
