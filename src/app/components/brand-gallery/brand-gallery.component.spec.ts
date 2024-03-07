import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandGalleryComponent } from './brand-gallery.component';

describe('BrandGalleryComponent', () => {
  let component: BrandGalleryComponent;
  let fixture: ComponentFixture<BrandGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
