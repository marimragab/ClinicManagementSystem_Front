import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientAppointmentReportForaDayComponent } from './report-patient-appointment-report-fora-day.component';

describe('ReportPatientAppointmentReportForaDayComponent', () => {
  let component: ReportPatientAppointmentReportForaDayComponent;
  let fixture: ComponentFixture<ReportPatientAppointmentReportForaDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPatientAppointmentReportForaDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPatientAppointmentReportForaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
