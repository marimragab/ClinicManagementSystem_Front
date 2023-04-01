import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-appointment-report-fora-day',
  templateUrl: './report-appointment-report-fora-day.component.html',
  styleUrls: ['./report-appointment-report-fora-day.component.css']
})
export class ReportAppointmentReportForaDayComponent {
  selectedDate: Date;
  onGetAppointmentByDate() {
    this.reportservice.getAppointmentForDay(this.selectedDate).subscribe(data => {
      // Handle response data
      console.log(data);
    });
  }
  constructor(public reportservice : ReportService){}
}
