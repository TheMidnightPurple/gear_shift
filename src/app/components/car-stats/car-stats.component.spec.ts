import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStatsComponent } from './car-stats.component';

describe('CarStatsComponent', () => {
  let component: CarStatsComponent;
  let fixture: ComponentFixture<CarStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
