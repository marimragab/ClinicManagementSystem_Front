import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDoctorAppointmentReportForaDayComponent } from './report-doctor-appointment-report-fora-day.component';

describe('ReportDoctorAppointmentReportForaDayComponent', () => {
  let component: ReportDoctorAppointmentReportForaDayComponent;
  let fixture: ComponentFixture<ReportDoctorAppointmentReportForaDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDoctorAppointmentReportForaDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDoctorAppointmentReportForaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
