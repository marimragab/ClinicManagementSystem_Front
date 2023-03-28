import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsAddComponent } from './clinics-add.component';

describe('ClinicsAddComponent', () => {
  let component: ClinicsAddComponent;
  let fixture: ComponentFixture<ClinicsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
