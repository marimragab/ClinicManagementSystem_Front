import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicEditByManagerComponent } from './clinic-edit-by-manager.component';

describe('ClinicEditByManagerComponent', () => {
  let component: ClinicEditByManagerComponent;
  let fixture: ComponentFixture<ClinicEditByManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicEditByManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicEditByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
