import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDailyAppointmentComponent } from './report-daily-appointment.component';

describe('ReportDailyAppointmentComponent', () => {
  let component: ReportDailyAppointmentComponent;
  let fixture: ComponentFixture<ReportDailyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDailyAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDailyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
