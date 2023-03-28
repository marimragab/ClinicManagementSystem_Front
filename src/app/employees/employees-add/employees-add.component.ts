import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { address, Clinics } from 'src/app/_models/clinics';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

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

}
