import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent {
  clinic: Clinics[]=[];
  patient:Patient[]=[];
  doctor: Doctor[]=[];

  pres: Prescription = new Prescription(0,{medicineId:0,quantity:"",medicineDosage:""},"","","",0,0,0);
  // public dataSource!: MatTableDataSource<Employee>;

// @ViewChild(MatPaginator) paginator!: MatPaginator;
// @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.presService.getPrescriptionById(p['id']).subscribe((data:Prescription[])=>{
      this.pres=data[0];
      console.log(data);
      console.log(data[0]._id);
      console.log(this.pres);
      // this.dataSource = new MatTableDataSource(data);
      // this.dataSource.sort=this.sort;
      // this.dataSource.paginator=this.paginator;
      
    })
  })
  
  }
 
 constructor(public presService : PrescriptionService, public activatedroute:ActivatedRoute){}

}
