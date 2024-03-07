import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLapTimeComponent } from './track-lap-time.component';

describe('TrackLapTimeComponent', () => {
  let component: TrackLapTimeComponent;
  let fixture: ComponentFixture<TrackLapTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackLapTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackLapTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
