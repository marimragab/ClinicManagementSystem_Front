import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.css']
})
export class EmployeesUpdateComponent {
  emp:Employee=new Employee(0,"","",0,{city:"",street:"",building:0},"");
  ngOnInit(){
    this.activatedroute.params.subscribe(p=>{
      this.employeeservice.getEmployeeById(p['id']).subscribe((data:Employee[])=>{
        this.emp=data[0];
      })
    })
  }
  update(){
  this.employeeservice.updateEmployee(this.emp).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("/employees")
  })
  }
    constructor(public employeeservice : EmployeeService, public activatedroute:ActivatedRoute, public router: Router){}
  
}
