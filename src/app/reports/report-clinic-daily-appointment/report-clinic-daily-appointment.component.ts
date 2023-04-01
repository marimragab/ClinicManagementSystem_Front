import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/models/appointment';
import { Clinics } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-clinic-daily-appointment',
  templateUrl: './report-clinic-daily-appointment.component.html',
  styleUrls: ['./report-clinic-daily-appointment.component.css'],
})
export class ReportClinicDailyAppointmentComponent {
  clinics: Clinics[];
  dailyAppointmentsForClinic: Appointment[];
  noappointments: string;
  error: boolean = false;
  data: boolean = false;

  displayedColumns: string[] = ['clinic', 'patient', 'doctor', 'from', 'to'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private clinicService: ClinicServicesService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    this.clinicService.getAllClinc().subscribe((data: any) => {
      console.log('Clinics', data.Data);
      this.clinics = data.Data;
    });
  }
  onClinicSelected(clinicId: number) {
    console.log(clinicId);
    this.data = false;
    this.error = false;

    this.getClinicDailyAppointments(clinicId);
  }

  getClinicDailyAppointments(clinicId: number) {
    this.reportService.getClinicAppointmentsAtToday(clinicId).subscribe({
      next: (data) => {
        console.log(data);
        this.data = true;
        this.dailyAppointmentsForClinic = data;
        this.dataSource = new MatTableDataSource(
          this.dailyAppointmentsForClinic
        );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.log(error);
        this.error = true;
        this.noappointments = ' No Appointments for selected date';
      },
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
