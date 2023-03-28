import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployessUpdateByManagerComponent } from './employess-update-by-manager.component';

describe('EmployessUpdateByManagerComponent', () => {
  let component: EmployessUpdateByManagerComponent;
  let fixture: ComponentFixture<EmployessUpdateByManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployessUpdateByManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployessUpdateByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
