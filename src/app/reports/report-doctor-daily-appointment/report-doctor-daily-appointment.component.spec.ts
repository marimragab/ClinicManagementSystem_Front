import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDoctorDailyAppointmentComponent } from './report-doctor-daily-appointment.component';

describe('ReportDoctorDailyAppointmentComponent', () => {
  let component: ReportDoctorDailyAppointmentComponent;
  let fixture: ComponentFixture<ReportDoctorDailyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDoctorDailyAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDoctorDailyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
