import { Component, OnInit, ViewChild } from '@angular/core';
import { Clinics } from 'src/app/models/clinics';
import { address } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ClinicsAddComponent } from '../clinics-add/clinics-add.component';
@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.css'],
})
export class ClinicsListComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'location',
    'mobilePhone',
    'doctors',
    'manager',
    'availability',
    'details',
    'edit',
    'delete',
  ];
  public clinic: Clinics[] = [];
  public dataSource!: MatTableDataSource<Clinics>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.clinicsservices.getAllClinc().subscribe((data: any) => {
      this.clinic = data.Data;
      console.log(data.Data);
      this.dataSource = new MatTableDataSource(this.clinic);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: number) {
    if (confirm('Are You Sure You Want To Dalete This Clinic?')) {
      this.clinicsservices.deleteById(id).subscribe((data) => {
        console.log(data);
      });
    }
  }
  open() {
    this._dialog.open(ClinicsAddComponent);
  }

  constructor(
    public clinicsservices: ClinicServicesService,
    private _dialog: MatDialog
  ) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
