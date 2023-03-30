import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css'],
})
export class ListInvoicesComponent implements OnInit {
  displayedColumns: string[] = [
    '_id',
    'clinic',
    'patient',
    'date',
    'time',
    'services',
    'action',
  ];

  dataSource: any;
  invoices: Invoice[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private invoiceService: InvoiceService) {}
  ngOnInit() {
    this.getAllInvoices();
  }

  getAllInvoices() {
    this.invoiceService.getAllInvoices().subscribe((data: any) => {
      console.log(data.Data);
      this.invoices = data.Data;
      // this.dataSource = data.Data;
      this.dataSource = new MatTableDataSource(this.invoices);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  deleteInvoice(id: number) {
    if (confirm('Are you sure?')) {
      this.invoiceService.deleteInvoiceById(id).subscribe((data) => {
        console.log(data);

        let indexToRemove = this.invoices.findIndex(
          (appointment) => appointment._id === id
        );
        this.invoices.splice(indexToRemove, 1);
      });
    }
  }
}
