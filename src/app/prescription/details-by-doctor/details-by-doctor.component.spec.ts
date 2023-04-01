import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsByDoctorComponent } from './details-by-doctor.component';

describe('DetailsByDoctorComponent', () => {
  let component: DetailsByDoctorComponent;
  let fixture: ComponentFixture<DetailsByDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsByDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
