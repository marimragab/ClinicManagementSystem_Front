import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsDetailsComponent } from './clinics-details.component';

describe('ClinicsDetailsComponent', () => {
  let component: ClinicsDetailsComponent;
  let fixture: ComponentFixture<ClinicsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
