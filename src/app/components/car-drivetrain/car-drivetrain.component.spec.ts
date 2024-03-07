import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDrivetrainComponent } from './car-drivetrain.component';

describe('CarDrivetrainComponent', () => {
  let component: CarDrivetrainComponent;
  let fixture: ComponentFixture<CarDrivetrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDrivetrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarDrivetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
