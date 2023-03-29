import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { PatientService } from 'src/app/_services/patient.service';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css'],
})
export class ListPatientsComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'SSN',
    'fullName',
    'age',
    'address',
    'phone',
    'action',
  ];
  dataSource: any;
  patients: Patient[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public patientService: PatientService) {}
  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAllPatients().subscribe((data: any) => {
      console.log(data.Data);
      this.patients = data.Data;
      // this.dataSource = data.Data;
      this.dataSource = new MatTableDataSource(this.patients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  getRowData(row: any) {
    console.log(row);
  }

  deletePatient(id: number) {
    if (confirm('Are you sure?')) {
      this.patientService.deletePatientById(id).subscribe((data) => {
        console.log(data === 'deleted');
        console.log(data);

        let indexToRemove = this.patients.findIndex(
          (patient) => patient._id === id
        );
        this.patients.splice(indexToRemove, 1);
      });
    }
  }
}
