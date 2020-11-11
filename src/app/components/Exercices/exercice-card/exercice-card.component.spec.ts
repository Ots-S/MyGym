import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceCardComponent } from './exercice-card.component';

describe('ExerciceCardComponent', () => {
  let component: ExerciceCardComponent;
  let fixture: ComponentFixture<ExerciceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
