import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { Medicine } from 'src/app/models/medicine';

import { MedicineService } from 'src/app/services/medicine.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent {
  displayedColumns: string[] = ['_id', 'name', 'description'];
med:Medicine=new Medicine(0,"","");
public dataSource!: MatTableDataSource<Medicine>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngOnInit(){
this.activatedroute.params.subscribe(p=>{
  this.medService.getMedicineById(p['id']).subscribe((data:Medicine[])=>{
    this.med=data[0];
    console.log(data[0]._id);
    console.log(this.med);
    this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
  })
})

}
constructor(public medService : MedicineService, public activatedroute:ActivatedRoute){}

}
