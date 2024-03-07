import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFiltersComponent } from './car-filters.component';

describe('CarFiltersComponent', () => {
  let component: CarFiltersComponent;
  let fixture: ComponentFixture<CarFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
