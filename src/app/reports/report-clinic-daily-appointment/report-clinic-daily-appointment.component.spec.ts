import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClinicDailyAppointmentComponent } from './report-clinic-daily-appointment.component';

describe('ReportClinicDailyAppointmentComponent', () => {
  let component: ReportClinicDailyAppointmentComponent;
  let fixture: ComponentFixture<ReportClinicDailyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClinicDailyAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportClinicDailyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
