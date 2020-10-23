import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceCounterComponent } from './exercice-counter.component';

describe('ExerciceCounterComponent', () => {
  let component: ExerciceCounterComponent;
  let fixture: ComponentFixture<ExerciceCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
