import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Specialist } from 'src/app/models/specialist';
import { SpecialistService } from 'src/app/services/specialist.service';
import { SpecialistAddComponent } from '../specialist-add/specialist-add.component';
@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.css'],
})
export class SpecialistListComponent {
  displayedColumns: string[] = [
    '_id',
    'specialty',
    'availability',
    'details',
    'edit',
    'delete',
  ];
  public specialist: Specialist[] = [];
  public dataSource!: MatTableDataSource<Specialist>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.specialistService.getAllSpecialis().subscribe((data: any) => {
      this.specialist = data.Data;
      // console.log( data);
      this.dataSource = new MatTableDataSource(this.specialist);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  constructor(
    public specialistService: SpecialistService,
    private _dialog: MatDialog
  ) {}
  delete(id: number) {
    if (confirm('Are You Sure You Want To Dalete This Clinic?')) {
      this.specialistService.deleteSpecialist(id).subscribe((data) => {
        console.log(data);
      });
    }
  }
  open() {
    this._dialog.open(SpecialistAddComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
