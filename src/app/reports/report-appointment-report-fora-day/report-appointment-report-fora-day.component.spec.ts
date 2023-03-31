import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAppointmentReportForaDayComponent } from './report-appointment-report-fora-day.component';

describe('ReportAppointmentReportForaDayComponent', () => {
  let component: ReportAppointmentReportForaDayComponent;
  let fixture: ComponentFixture<ReportAppointmentReportForaDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAppointmentReportForaDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAppointmentReportForaDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
