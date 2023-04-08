import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient) {}
  dbUrl: string = 'http://localhost:8080/invoices/';

  //Admin Only
  getAllInvoices() {
    return this.http.get<Invoice[]>(this.dbUrl);
  }

  addInvoice(newInvoice: Invoice) {
    return this.http.post<Invoice>(this.dbUrl, newInvoice);
  }

  //Admin or Patient
  getInvoiceById(id: number) {
    return this.http.get<Invoice>(this.dbUrl + id);
  }
  updateInvoice(id: number, inv: Invoice) {
    return this.http.patch<Invoice>(this.dbUrl + 'admin/' + id, inv);
  }

  deleteInvoiceById(id: number) {
    return this.http.delete(this.dbUrl + id);
  }
}
