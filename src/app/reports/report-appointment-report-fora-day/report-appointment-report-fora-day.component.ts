import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/models/appointment';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-appointment-report-fora-day',
  templateUrl: './report-appointment-report-fora-day.component.html',
  styleUrls: ['./report-appointment-report-fora-day.component.css'],
})
export class ReportAppointmentReportForaDayComponent {
  selectedDate: string = '';
  formattedDate: string = '';
  appointmentsAtDay: Appointment[] = [];
  noappointments: string;

  displayedColumns: string[] = ['clinic', 'patient', 'doctor', 'from', 'to'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //Get Appointments at specific day
  onGetAppointmentByDate() {
    this.noappointments = '';
    this.appointmentsAtDay = [];
    console.log(this.selectedDate);
    this.formattedDate = convertDate(this.selectedDate);
    console.log(this.formattedDate);
    this.reportservice
      .getAppointmentForDay(this.formattedDate)
      .subscribe((data) => {
        console.log(data);
        if (data.length == 0) {
          this.noappointments = ' No Appointments for selected date';
        } else {
          this.appointmentsAtDay = data;
          this.dataSource = new MatTableDataSource(this.appointmentsAtDay);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
  }
  constructor(public reportservice: ReportService) {}
  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}

function convertDate(strDate) {
  const dateObject = new Date(strDate);
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
