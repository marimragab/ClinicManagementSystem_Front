import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporEditComponent } from './repor-edit.component';

describe('ReporEditComponent', () => {
  let component: ReporEditComponent;
  let fixture: ComponentFixture<ReporEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
