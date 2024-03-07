import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPageComponent } from './car-page.component';

describe('CarPageComponent', () => {
  let component: CarPageComponent;
  let fixture: ComponentFixture<CarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
