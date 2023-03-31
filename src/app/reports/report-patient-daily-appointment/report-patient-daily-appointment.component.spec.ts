import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientDailyAppointmentComponent } from './report-patient-daily-appointment.component';

describe('ReportPatientDailyAppointmentComponent', () => {
  let component: ReportPatientDailyAppointmentComponent;
  let fixture: ComponentFixture<ReportPatientDailyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPatientDailyAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPatientDailyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
