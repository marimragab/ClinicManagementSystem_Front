import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.css']
})
export class MedicineEditComponent {
//   med:Medicine=new Medicine(0,"","");
// ngOnInit(){
//   this.activatedroute.params.subscribe(p=>{
//     this.medService.getMedicineById(p['id']).subscribe((data:Medicine[])=>{
//       this.med=data[0];
//     })
//   })
// }
// update(){
// this.medService.updateMedicine(this.med).subscribe(data=>{
//   console.log(data);
//   console.log(this.med);
//   this.router.navigateByUrl("/medicine")
// })
// }
// reactiveForm = new FormGroup({
  
//   name: new FormControl(null),
//   description: new FormControl(null)
// });
//   constructor(public medService : MedicineService, public activatedroute:ActivatedRoute, public router: Router){}

















constructor(
  private medService: MedicineService,
  public activatedroute: ActivatedRoute,
  public router: Router
) {}

successMessage: string;
errorMessage: string;
medId: number;
showForm: boolean = true;

editMedicineForm = new FormGroup({
 
  
  name: new FormControl([], [Validators.required]),
  description: new FormControl('', [Validators.required])
});

get medicineValues() {
  return this.editMedicineForm.controls;
}

med: any;
ngOnInit() {
  
  this.activatedroute.params.subscribe((p) => {
    this.medService.getMedicineById(p['id']).subscribe((data: any) => {
      console.log(data);
      this.med = data[0];
      console.log(this.med);
      this.medId = this.med._id;
      this.editMedicineForm.patchValue({
       
        name: this.med.name,
        description: this.med.description
      });
     
    });
  });
}
updateMedicine(med: any) {
  console.log(this.editMedicineForm);
  console.log(this.editMedicineForm.value);

  this.medService.updateMedicine(this.medId, med).subscribe({
    next: (data: any) => {
      console.log(data);
      this.successMessage = data.Message;
      const form = document.getElementById('medicineForm') as HTMLFormElement;
      form.reset();
      this.showForm = false;
    },
    error: (error) => {
      this.errorMessage = error;
      console.log(error);
    },
  });
}


}
