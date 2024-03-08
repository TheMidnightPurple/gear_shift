import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCardComponent } from './brand-card.component';

describe('BrandCardComponent', () => {
  let component: BrandCardComponent;
  let fixture: ComponentFixture<BrandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
