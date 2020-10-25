import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesRecapComponent } from './series-recap.component';

describe('SeriesRecapComponent', () => {
  let component: SeriesRecapComponent;
  let fixture: ComponentFixture<SeriesRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
