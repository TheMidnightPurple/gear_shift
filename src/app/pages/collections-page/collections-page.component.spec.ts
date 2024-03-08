import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsPageComponent } from './collections-page.component';

describe('CollectionsPageComponent', () => {
  let component: CollectionsPageComponent;
  let fixture: ComponentFixture<CollectionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
