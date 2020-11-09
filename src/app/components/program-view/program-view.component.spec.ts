import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramViewComponent } from './program-view.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProgramViewComponent', () => {
  let component: ProgramViewComponent;
  let fixture: ComponentFixture<ProgramViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProgramViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
