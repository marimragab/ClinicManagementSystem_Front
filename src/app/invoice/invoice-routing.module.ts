import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';

const routes: Routes = [
  { path: '', component: ListInvoicesComponent },
  {
    path: 'details/:id',
    component: InvoicesDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateInvoiceComponent,
  },
  { path: 'add', component: AddInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
