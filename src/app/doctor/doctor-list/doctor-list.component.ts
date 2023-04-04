import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModuel } from '../../../material-Moduel';

import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  displayedColumns: string[] = ['id', 'SSN', 'firstName','lastName','age','Address','phone' ,'specialty','Action'];
  dataSource: any;
  doctordata: any;

  doctor:Doctor=new Doctor(0,0,"","",0,{},0,"","",[],true)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public doctorService: DoctorService) {
    // Create 100 users
    // Assign the data to the data source for the table to render
  }

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
    this.doctorService.getAll().subscribe((data) => {
      this.doctordata = data;

      this.dataSource = new MatTableDataSource<Doctor>(this.doctordata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  public getRow(row:any) {}

  public Edit(row:Doctor){

  }
  public delete(row:Doctor){
      this.doctorService.deleteById(row._id).subscribe(data=>{
            
      })
  }

}

/** Builds and returns a new User. */

//   displayedColumns: string[] = ['id', 'name', 'progress','Action'];
//   dataSource:any;
//   doctordata:any;

//   @ViewChild(MatPaginator) paginator !:MatPaginator;
//   @ViewChild(MatSort) sort !:MatSort;

//   ngOnInit(){
//       this.GetAll();
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }
//   constructor(public doctorService:DoctorService ){

//   }
//   GetAll(){
//     this.doctorService.getAll().subscribe(data=>{
//       this.doctordata=data;

//       this.dataSource=new MatTableDataSource<Doctor>(this.doctordata)
//       this.dataSource.paginator=this.paginator
//       this.dataSource.sort=this.sort;
//     })
//   }
// }
