import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionEditComponent } from './prescription-edit.component';

describe('PrescriptionEditComponent', () => {
  let component: PrescriptionEditComponent;
  let fixture: ComponentFixture<PrescriptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
