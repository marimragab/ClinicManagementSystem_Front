import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { address, Clinics } from 'src/app/models/clinics';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent {
 clinic: Clinics[]=[];
  //doc: Array<Number>=[];
  emp:Employee=new Employee(0,"","",0,{city:"",street:"",building:0},"","","",0,"",true,0);
save(){
 this.employeeservice.addEmployee(this.emp).subscribe((data:Employee[])=>{
  console.log(data[0]);
  this.router.navigateByUrl("/employees");
 })
}
constructor(public employeeservice : EmployeeService, public router: Router){}

reactiveForm = new FormGroup({
  SSN:new FormControl(null),
  firstName :new FormControl(null),
  lastName:new FormControl(null),
  age:new FormControl(null),
  address: new FormGroup({
    city: new FormControl(null),
    street: new FormControl(null),
    building: new FormControl(null),
  }),
  password: new FormControl(null),
  email: new FormControl(null),
  phone: new FormControl(null),
  job: new FormControl(null),
  salary: new FormControl(null),
  clinic: new FormControl(null),
  availability: new FormControl(null),
});

}
