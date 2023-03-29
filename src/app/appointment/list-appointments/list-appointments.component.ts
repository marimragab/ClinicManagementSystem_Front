import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/_models/appointment';
import { AppointmentService } from 'src/app/_services/appointment.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css'],
})
export class ListAppointmentsComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'clinic',
    'doctor',
    'patient',
    'date',
    'from',
    'to',
  ];
  dataSource: any;
  appointments: Appointment[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appointmentService: AppointmentService) {}
  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentService.getAllAppointments().subscribe((data: any) => {
      console.log(data.Data);
      this.appointments = data.Data;
      // this.dataSource = data.Data;
      this.dataSource = new MatTableDataSource(this.appointments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure?')) {
      this.appointmentService.deleteAppointmentById(id).subscribe((data) => {
        console.log(data);

        let indexToRemove = this.appointments.findIndex(
          (appointment) => appointment._id === id
        );
        this.appointments.splice(indexToRemove, 1);
      });
    }
  }
}
