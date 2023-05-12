import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DatePipe } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Doctor } from '../../models/doctor';
import { PrescriptionService } from '../../services/prescription.service';
import { DoctorService } from '../../services/doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Prescription } from 'src/app/models/prescription';

@Component({
  selector: 'app-doc-pres',
  templateUrl: './doc-pres.component.html',
  styleUrls: ['./doc-pres.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class DocPresComponent {
  date: string;
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  displayedColumns: string[] = [
    'clinic',
    'patient',
    'date',
    'time',
    'medicine',
    'notes',
  ];
  dataSource: any;
  doctordata: any;
  pres: Prescription[] = [];
  pres2: Prescription[] = [];

  selectedDate: string;
  id: number;

  doctor: Doctor = new Doctor(0, 0, '', '', 0, {}, 0, '', '', [], true);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public doctorService: DoctorService,
    public router: Router,
    public datePipe: DatePipe,
    public press: PrescriptionService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.getAllPress();
  }

  onDateChange(e) {
    const dateString = this.datePipe.transform(e.value, 'M/dd/yyyy');

    this.press.getPrescriptionByDoctorId(this.id).subscribe((data) => {
      console.log(data);
      this.pres = data;
      this.pres2.splice(0, this.pres2.length);
      this.pres2.push(...this.pres.filter((e) => e.date === dateString));

      this.dataSource = new MatTableDataSource(this.pres2);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.pres);
      console.log(this.pres2);
      console.log(dateString);
    });
  }

  getAllPress() {
    this.press.getPrescriptionByDoctorId(this.id).subscribe((data) => {
      this.pres = data;

      this.dataSource = new MatTableDataSource(this.pres);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.pres);
    });
  }

  customFilterPredicate(data: Prescription, filter: string): boolean {
    const searchTerm = filter.toLowerCase();

    return (
      data.clinic['location']['city'].toLowerCase().includes(searchTerm) ||
      data.patient['firstName'].toLowerCase().includes(searchTerm) ||
      data.patient['lastName'].toLowerCase().includes(searchTerm) ||
      data.notes.toLowerCase().includes(searchTerm) ||
      data.medicine[0].medicineId.name.toLowerCase().includes(searchTerm)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = this.customFilterPredicate;
  }
}
