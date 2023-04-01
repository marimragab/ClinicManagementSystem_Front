import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.css']
})
export class MedicineEditComponent {
  med:Medicine=new Medicine(0,"","");
ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.medService.getMedicineById(p['id']).subscribe((data:Medicine[])=>{
      this.med=data[0];
    })
  })
}
update(){
this.medService.updateMedicine(this.med).subscribe(data=>{
  console.log(data);
  console.log(this.med);
  this.router.navigateByUrl("/medicine")
})
}
reactiveForm = new FormGroup({
  
  name: new FormControl(null),
  description: new FormControl(null)
});
  constructor(public medService : MedicineService, public activatedroute:ActivatedRoute, public router: Router){}

}
