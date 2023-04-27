import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { DatePipe } from '@angular/common';
import { ViewEncapsulation} from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import{Router} from '@angular/router'
import{ActivatedRoute} from '@angular/router'

import { Doctor } from '../../models/doctor';
import{ReportService} from '../../services/report.service'
import { DoctorService } from '../../services/doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-doc-appoint',
  templateUrl: './doc-appoint.component.html',
  styleUrls: ['./doc-appoint.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class DocAppointComponent {

  date:string
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
     
    }

    return '';
  };

  displayedColumns: string[] = ['clinic', 'patient', 'From','To'];
  dataSource: any;
  doctordata: any;
  appoint:any
  selectedDate: string;
  id:number

  doctor:Doctor=new Doctor(0,0,"","",0,{},0,"","",[],true)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public doctorService: DoctorService,
           public router:Router,
           public datePipe: DatePipe,
           public report:ReportService,
           public route:ActivatedRoute) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    })
    this. getDailyAppintment();
    console.log(this.date)
  }


  onDateChange(e){
    const dateString = this.datePipe.transform(e.value, 'd/M/yyyy');

    this.report.getDoctorAppointmentsOnDay(dateString,this.id).subscribe(data=>{
      this.appoint = data;

      this.dataSource = new MatTableDataSource(this.appoint);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.appoint)
      console.log(dateString) 
  })}

  getDailyAppintment(){
    this.report.getDailyAppointmentsForDoctor(this.id).subscribe(data=>{
      this.appoint = data;

      this.dataSource = new MatTableDataSource(this.appoint);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.appoint)
      
    })
  }

}

