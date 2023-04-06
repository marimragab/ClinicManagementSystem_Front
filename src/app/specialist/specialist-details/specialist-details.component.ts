import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialist } from 'src/app/models/specialist';
import { SpecialistService } from 'src/app/services/specialist.service';

@Component({
  selector: 'app-specialist-details',
  templateUrl: './specialist-details.component.html',
  styleUrls: ['./specialist-details.component.css'],
})
export class SpecialistDetailsComponent {
  specialist: Specialist = new Specialist(0, '', true);
  // public dataSource!: MatTableDataSource<Employee>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.activatedroute.params.subscribe((p) => {
      this.specialistService
        .getSpecialistById(p['id'])
        .subscribe((data: Specialist[]) => {
          this.specialist = data[0];
          console.log(data);
          console.log(data[0]._id);
          console.log(this.specialist);
          // this.dataSource = new MatTableDataSource(data);
          // this.dataSource.sort=this.sort;
          // this.dataSource.paginator=this.paginator;
        });
    });
  }

  constructor(
    public specialistService: SpecialistService,
    public activatedroute: ActivatedRoute
  ) {}
}
