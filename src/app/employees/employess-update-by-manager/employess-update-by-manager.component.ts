import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employess-update-by-manager',
  templateUrl: './employess-update-by-manager.component.html',
  styleUrls: ['./employess-update-by-manager.component.css']
})
export class EmployessUpdateByManagerComponent {
  emp:Employee=new Employee(0,"","",0,{city:"",street:"",building:0},"","","",0,"",true,0);
  ngOnInit(){
    this.activatedroute.params.subscribe(p=>{
      this.employeeservice.getEmployeeById(p['id']).subscribe((data:Employee[])=>{
        this.emp=data[0];
      })
    })
  }
  update(){
  this.employeeservice.updateEmployeeByManager(this.emp).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl("/employees")
  })
  }
    constructor(public employeeservice : EmployeeService, public activatedroute:ActivatedRoute, public router: Router){}
  
}
