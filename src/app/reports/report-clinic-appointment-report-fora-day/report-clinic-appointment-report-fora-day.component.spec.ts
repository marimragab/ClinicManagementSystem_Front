import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClinicAppointmentReportForaDayComponent } from './report-clinic-appointment-report-fora-day.component';

describe('ReportClinicAppointmentReportForaDayComponent', () => {
  let component: ReportClinicAppointmentReportForaDayComponent;
  let fixture: ComponentFixture<ReportClinicAppointmentReportForaDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClinicAppointmentReportForaDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportClinicAppointmentReportForaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
