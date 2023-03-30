import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    ListInvoicesComponent,
    InvoicesDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
  ],
  exports: [
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    ListInvoicesComponent,
    InvoicesDetailsComponent,
  ],
})
export class InvoiceModule {}
