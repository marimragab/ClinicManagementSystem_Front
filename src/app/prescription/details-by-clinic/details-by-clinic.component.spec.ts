import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsByClinicComponent } from './details-by-clinic.component';

describe('DetailsByClinicComponent', () => {
  let component: DetailsByClinicComponent;
  let fixture: ComponentFixture<DetailsByClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsByClinicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsByClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
