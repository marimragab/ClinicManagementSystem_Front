import { Component , ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent {
  displayedColumns: string[] = ['_id', 'SSN', 'firstName', 'lastName',
  'age', 'city', 'street', 'building','phone','job','salary','image','cliniclocationcity','cliniclocationstreet','cliniclocationbuilding','availability'
];
  emp:Employee=new Employee(0,"","",0,{city:"",street:"",building:0},"","","",0,"",true,0);
  public dataSource!: MatTableDataSource<Employee>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.employeeservice.getEmployeeById(p['id']).subscribe((data:Employee[])=>{
      this.emp=data[0];
      console.log(data);
      console.log(data[0]._id);
      console.log(this.emp);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      
    })
  })
  
  }
 
 constructor(public employeeservice : EmployeeService, public activatedroute:ActivatedRoute){}

}
