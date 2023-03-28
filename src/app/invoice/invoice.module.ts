import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';

@NgModule({
  declarations: [
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    ListInvoicesComponent,
    InvoicesDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    ListInvoicesComponent,
    InvoicesDetailsComponent,
  ],
})
export class InvoiceModule {}
