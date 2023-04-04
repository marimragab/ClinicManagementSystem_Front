import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})
export class MedicineAddComponent {
  med: Medicine = new Medicine(0,"","");
  save(med: any) {
    // this.clinicservices.addClinic(this.clinic).subscribe(data=>{
    //     console.log(data);
    //     this.router.navigateByUrl("/clinics");
    //    })
    console.log(med);
    this.medService.addMedicine(med).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/medicine');
    });
  }
  //reactiveForm: FormGroup;
  constructor(
    public medService: MedicineService,
    public router: Router
  ) {}

  reactiveForm = new FormGroup({
  
    name: new FormControl(null),
    description: new FormControl(null)
  });
}
