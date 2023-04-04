import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModuel } from '../../../material-Moduel';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-presciption-list',
  templateUrl: './presciption-list.component.html',
  styleUrls: ['./presciption-list.component.css']
})
export class PresciptionListComponent {
  displayedColumns: string[] = ['id', 'SSN', 'firstName','lastName','age','Address','phone' ,'specialty','Action'];
  dataSource: any;
  presdata: any;

  presciption:Prescription=new Prescription(0,0,0,0,"","","",{})
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public prescriptionService: PrescriptionService) {
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
    this.prescriptionService.getAll().subscribe((data) => {
      this.presdata = data;

      this.dataSource = new MatTableDataSource<Prescription>(this.presdata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  public getRow(row:any) {}

  public Edit(row:Prescription){

  }
  public delete(row:Prescription){
      this.prescriptionService.deleteById(row._id).subscribe(data=>{
            
      })
  }

}



