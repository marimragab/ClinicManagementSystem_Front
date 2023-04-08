import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { address, Clinics } from 'src/app/models/clinics';
import { Employee } from 'src/app/models/employee';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent {
//  clinic: Clinics[]=[];
//   //doc: Array<Number>=[];
//   emp:Employee=new Employee(0,"","",0,{city:"",street:"",building:0},"","","",0,"",true,0);
// save(){
//  this.employeeservice.addEmployee(this.emp).subscribe((data:Employee[])=>{
//   console.log(data[0]);
//   this.router.navigateByUrl("/employees");
//  })
// }
// constructor(public employeeservice : EmployeeService, public router: Router){}

// reactiveForm = new FormGroup({
//   SSN:new FormControl(null),
//   firstName :new FormControl(null),
//   lastName:new FormControl(null),
//   age:new FormControl(null),
//   address: new FormGroup({
//     city: new FormControl(null),
//     street: new FormControl(null),
//     building: new FormControl(null),
//   }),
//   password: new FormControl(null),
//   email: new FormControl(null),
//   phone: new FormControl(null),
//   job: new FormControl(null),
//   salary: new FormControl(null),
//   clinic: new FormControl(null),
//   availability: new FormControl(null),
// });




constructor(
  private employeeSwevice: EmployeeService,
  private clinicService: ClinicServicesService,
  private router: Router
) {}

successMessage: string;
errorMessage: string;
clinics: any[];
showForm: boolean = true;
// managers: any[];

employeeForm = new FormGroup({
  SSN:new FormControl('', [Validators.required]),
  firstName:new FormControl('', [Validators.required]),
  lastName:new FormControl('', [Validators.required]),
  age:new FormControl('', [Validators.required]),
address: new FormGroup({
  city: new FormControl('', [Validators.required]),
  street: new FormControl('', [Validators.required]),
  building: new FormControl(0, [Validators.required]),
}),
password:new FormControl([], [Validators.required]),
email:new FormControl([], [Validators.required]),
phone:new FormControl([], [Validators.required]),
job:new FormControl([], [Validators.required]),
salary:new FormControl([], [Validators.required]),
clinic: new FormControl('', [Validators.required]),
image : new  FormControl('', [Validators.required])
//availability: new FormControl(true, [Validators.required]),
});

get employeeValues() {
  return this.employeeForm.controls;
}
addEmployee(emp: any) {
  this.successMessage = '';
  this.errorMessage = '';
  console.log(this.employeeForm);
  console.log(this.employeeForm.value);
  console.log(emp);
  this.clinicService.addClinic(emp).subscribe({
    next: (data: any) => {
      console.log(data);
      this.successMessage = data.Message;
      const form = document.getElementById('employeeForm') as HTMLFormElement;
      form.reset();
      this.showForm = false;
    },
    error: (error) => {
      this.errorMessage = error;
      console.log(error);
    },
  });
}

ngOnInit() {
  this.clinicService.getAllClinc().subscribe((data: any) => {
    this.clinics = data.Data;
  });
}
}
