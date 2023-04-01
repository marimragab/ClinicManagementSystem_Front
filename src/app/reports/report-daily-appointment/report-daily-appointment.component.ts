import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/models/appointment';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-daily-appointment',
  templateUrl: './report-daily-appointment.component.html',
  styleUrls: ['./report-daily-appointment.component.css'],
})
export class ReportDailyAppointmentComponent {
  constructor(private reportService: ReportService) {}
  dailyAppointments: Appointment[];

  displayedColumns: string[] = ['clinic', 'patient', 'doctor', 'from', 'to'];
  dataSource: any;
  noappointments: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  getDailyReports() {
    this.reportService.getDailyAppointments().subscribe({
      next: (data) => {
        console.log(data);
        if (data.length == 0)
          this.noappointments = ' No Appointments for selected date';
        else {
          this.dailyAppointments = data;
          this.dataSource = new MatTableDataSource(this.dailyAppointments);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.getDailyReports();
  }
}
