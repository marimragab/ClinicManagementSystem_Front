import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistAddComponent } from './specialist-add.component';

describe('SpecialistAddComponent', () => {
  let component: SpecialistAddComponent;
  let fixture: ComponentFixture<SpecialistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
