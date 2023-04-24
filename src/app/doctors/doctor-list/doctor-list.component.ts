
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModuel } from '../../material.module'
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import{Router} from '@angular/router'


import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent {
  displayedColumns: string[] = ['id', 'SSN', 'firstName','lastName','age','phone' ,'specialty','Action'];
  dataSource: any;
  doctordata: any;

  doctor:Doctor=new Doctor(0,0,"","",0,{},0,"","",[],true)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public doctorService: DoctorService,public router:Router) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.GetAll();
  }
  GetAll() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      this.doctordata = data;

      this.dataSource = new MatTableDataSource<Doctor>(this.doctordata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.doctordata)
    });
  }

  public delete(row: Doctor) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.doctorService.deleteById(row._id).subscribe(() => {
          const index = this.doctordata.findIndex((item) => item._id === row._id);
          console.log('before'+this.doctordata)
          if (index !== -1) {
            this.doctordata.splice(index, 1);
            this.dataSource = new MatTableDataSource<Doctor>(this.doctordata); // Reinitialize the MatTableDataSource with updated data
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          Swal.fire(
            'Deleted!',
            'Doctor deleted sucessfully',
            'success'
          )
        });
        console.log("after delete"+this.doctordata)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
        console.log("after"+this.doctordata);
        
      }
      this.GetAll();
    });
  
  }
  
  }



