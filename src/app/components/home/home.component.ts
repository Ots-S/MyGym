import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ExerciceService } from '../../services/exercice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private programService: ProgramService,
    private exerciceService: ExerciceService
  ) {}

  programs: Array<object>;
  exercices: Array<object>;

  ngOnInit(): void {
    this.programs = this.programService.getPrograms();
    this.exercices = this.exerciceService.getExercices().slice(0, 3);
  }
}
