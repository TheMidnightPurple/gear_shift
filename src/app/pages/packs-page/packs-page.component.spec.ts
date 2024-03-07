import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksPageComponent } from './packs-page.component';

describe('PacksPageComponent', () => {
  let component: PacksPageComponent;
  let fixture: ComponentFixture<PacksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
