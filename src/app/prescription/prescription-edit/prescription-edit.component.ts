import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescription-edit',
  templateUrl: './prescription-edit.component.html',
  styleUrls: ['./prescription-edit.component.css']
})
export class PrescriptionEditComponent {
 
  clinic: Clinics[]=[];
  patient:Patient[]=[];
  doctor: Doctor[]=[];

  pres: Prescription = new Prescription(0,{medicineId:0,quantity:"",medicineDosage:""},"","","",0,0,0);
ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.presService.getPrescriptionById(p['id']).subscribe((data:Prescription[])=>{
      this.pres=data[0];
    })
  })
}
update(){
this.presService.updatePrescription(this.pres).subscribe(data=>{
  console.log(data);
  console.log(this.pres);
  this.router.navigateByUrl("/prescription")
})
}
reactiveForm = new FormGroup({
  clinic:new FormControl(null),
  doctor :new FormControl(null),
  patient:new FormControl(null),
});
  constructor(public presService: PrescriptionService,
    public router: Router, public activatedroute:ActivatedRoute){}
}
