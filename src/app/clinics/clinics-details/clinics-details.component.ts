import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { address, Clinics } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-clinics-details',
  templateUrl: './clinics-details.component.html',
  styleUrls: ['./clinics-details.component.css']
})
export class ClinicsDetailsComponent {
  displayedColumns: string[] = ['_id', 'city', 'street', 'building',
  'mobilePhone', 'doctors', 'manager', 'availability'];
clinic:Clinics=new Clinics(0,{city:"",street:"",building:0},"",[],0,true);
public dataSource!: MatTableDataSource<Clinics>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngOnInit(){
this.activatedroute.params.subscribe(p=>{
  this.clinicsservices.getClincById(p['id']).subscribe((data:Clinics[])=>{
    this.clinic=data[0];
    console.log(data[0]._id);
    console.log(this.clinic);
    this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
  })
})

}
constructor(public clinicsservices : ClinicServicesService, public activatedroute:ActivatedRoute){}

}



