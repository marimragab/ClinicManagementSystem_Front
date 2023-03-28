import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { Clinics,address } from 'src/app/_models/clinics';
import { ClinicServicesService } from 'src/app/_services/clinic-services.service';

@Component({
  selector: 'app-clinics-add',
  templateUrl: './clinics-add.component.html',
  styleUrls: ['./clinics-add.component.css']
})
export class ClinicsAddComponent {
 
  
doctor: number[]=[
 1,2,3,4
]
manager: number[]=[
  1,2,3,4
]
  clinic:Clinics=new Clinics(0,{city:"",street:"",building:0},"");
save(){
  
      // this.clinicservices.addClinic(this.clinic).subscribe(data=>{
      //     console.log(data);
      //     this.router.navigateByUrl("/clinics");
      //    })
   
 this.clinicservices.addClinic(this.clinic).subscribe(data=>{
  console.log(data);
  this.router.navigateByUrl("/clinics");
 })
}
reactiveForm : FormGroup;
constructor(public clinicservices : ClinicServicesService, public router: Router,){
  this.reactiveForm = new FormGroup({
      city: new FormControl(null),
      street: new FormControl(null),
      building: new FormControl(null),
      mobilePhone: new FormControl(null),
      doctors: new FormControl(null),
      manager: new FormControl(null),
      availability: new FormControl(null),
    })
}

}
