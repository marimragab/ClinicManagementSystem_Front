import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/services/prescription.service';
import { PrescriptionAddComponent } from '../prescription-add/prescription-add.component';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css'],
})
export class PrescriptionListComponent {
  displayedColumns: string[] = [
    '_id',
    'clinic',
    'doctor',
    'patient',

    'detailsbypres_id',
    'detailsbyclinic',
    'detailsbydoctor_id',
    'detailsbypatient_id',

    'edit',
    'delete',
  ];
  public pres: Prescription[] = [];
  public dataSource!: MatTableDataSource<Prescription>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.prescService.getAllPrescription().subscribe((data: any) => {
      this.pres = data.Data;
      console.log(data.Data);
      this.dataSource = new MatTableDataSource(this.pres);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  constructor(
    public prescService: PrescriptionService,
    private _dialog: MatDialog
  ) {}
  delete(id: number) {
    if (confirm('Are You Sure You Want To Dalete This Prescription?')) {
      this.prescService.deletePrescription(id).subscribe((data) => {
        console.log(data);
      });
    }
  }
  open() {
    this._dialog.open(PrescriptionAddComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
