import { Component } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent {
  // constructor(
  //   private clinicService: ClinicServicesService,
  //   private doctorService: DoctorService,
  //   private router: Router
  // ) {}

  // successMessage: string;
  // errorMessage: string;
  // doctors: any[];
  // showForm: boolean = true;
  // // managers: any[];

  // clinicForm = new FormGroup({
  //   location: new FormGroup({
  //     city: new FormControl('', [Validators.required]),
  //     street: new FormControl('', [Validators.required]),
  //     building: new FormControl('', [Validators.required]),
  //   }),
  //   mobilePhone: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^01[0125][0-9]{8}$/),
  //   ]),
  //   doctors: new FormControl(''),
  //   manager: new FormControl('', [Validators.required]),
  //   // availability: new FormControl('', [Validators.required]),
  // });

  // get clinicValues() {
  //   return this.clinicForm.controls;
  // }
  // addclinic(clinic: any) {
  //   this.successMessage = '';
  //   this.errorMessage = '';
  //   console.log(this.clinicForm);
  //   console.log(this.clinicForm.value);
  //   console.log(clinic);
  //   this.clinicService.addClinic(clinic).subscribe({
  //     next: (data: any) => {
  //       console.log(data);
  //       this.successMessage = data.Message;
  //       const form = document.getElementById('clinicForm') as HTMLFormElement;
  //       form.reset();
  //       this.showForm = false;
  //     },
  //     error: (error) => {
  //       this.errorMessage = error;
  //       console.log(error);
  //     },
  //   });
  // }
  // ngOnInit() {
  //   this.doctorService.getAllDoctors().subscribe((data: any) => {
  //     this.doctors = data.Data;
  //   });
  // }
}
