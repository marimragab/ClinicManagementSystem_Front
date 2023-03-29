import { Component, ViewChild } from '@angular/core';
import { address } from 'src/app/models/clinics';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesAddComponent } from '../employees-add/employees-add.component';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent {
  displayedColumns: string[] = [
    '_id',
    'SSN',
    'firstName',
    'lastName',
    'age',
    'city',
    'street',
    'building',
    'phone',
    'job',
    'salary',
    'image',
    'cliniclocationcity',
    'cliniclocationstreet',
    'cliniclocationbuilding',
    'availability',
    'details',
    'edit',
    'delete',
  ];
  emp: Employee[] = [];
  public dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.employeeservice.getAllemplyees().subscribe((data: any) => {
      this.emp = data.Data;
      console.log(data[0]);

      this.dataSource = new MatTableDataSource(this.emp);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  delete(id: number) {
    if (confirm('Are You Sure You Want To Dalete This employee?')) {
      this.employeeservice.deleteEmployaaById(id).subscribe((data) => {
        console.log(data);
      });
    }
  }
  open() {
    this._dialog.open(EmployeesAddComponent);
  }
  constructor(
    public employeeservice: EmployeeService,
    private _dialog: MatDialog
  ) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
