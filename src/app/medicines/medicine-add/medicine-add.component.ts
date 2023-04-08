import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})
export class MedicineAddComponent {
  
  //reactiveForm: FormGroup;
  // constructor(
  //   public medService: MedicineService,
  //   public router: Router
  // ) {}









  
  constructor(
    public medService: MedicineService,
    public router: Router
  ) {}

  successMessage: string;
  errorMessage: string;

  showForm: boolean = true;
  // managers: any[];

  medicineForm = new FormGroup({
    
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
    
  });

  get medicineValues() {
    return this.medicineForm.controls;
  }
  addmedicine(med: any) {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.medicineForm);
    console.log(this.medicineForm.value);
    console.log(med);
    this.medService.addMedicine(med).subscribe({
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
