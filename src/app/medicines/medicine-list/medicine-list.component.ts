import { Component ,ViewChild , OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';
import { MedicineAddComponent } from '../medicine-add/medicine-add.component';
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'name',
    'description',
    'details',
    'edit',
    'delete',
  ];
  public med: Medicine[] = [];
  public dataSource!: MatTableDataSource<Medicine>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.medService.getAllMedicine().subscribe((data: any) => {
      this.med = data;
       console.log( data);
      this.dataSource = new MatTableDataSource(this.med);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: number) {
    if (confirm('Are You Sure You Want To Dalete This medicine?')) {
      this.medService.deleteMedicine(id).subscribe((data) => {
        console.log(data);
      });
    }
  }
  open() {
    this._dialog.open(MedicineAddComponent);
  }

  constructor(
    public medService: MedicineService,
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
