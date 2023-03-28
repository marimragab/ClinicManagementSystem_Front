import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicEditByAdminComponent } from './clinic-edit-by-admin.component';

describe('ClinicEditByAdminComponent', () => {
  let component: ClinicEditByAdminComponent;
  let fixture: ComponentFixture<ClinicEditByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicEditByAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicEditByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
