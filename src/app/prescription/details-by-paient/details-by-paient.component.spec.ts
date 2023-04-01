import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsByPaientComponent } from './details-by-paient.component';

describe('DetailsByPaientComponent', () => {
  let component: DetailsByPaientComponent;
  let fixture: ComponentFixture<DetailsByPaientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsByPaientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsByPaientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
