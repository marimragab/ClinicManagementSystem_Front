import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistEditComponent } from './specialist-edit.component';

describe('SpecialistEditComponent', () => {
  let component: SpecialistEditComponent;
  let fixture: ComponentFixture<SpecialistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
