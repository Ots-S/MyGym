import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  repetitionMax = 40;
  repetition: number;
  timer = 30;
  serieId: string;
  exercices: any;
  currentExerciceNumber: 0;
  currentExercice: any;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {}

  ngOnInit(): void {
    this.serieId = this.route.snapshot.paramMap.get('serie');
    this.exercices = this.programService.getExercicesByProgramId(this.serieId);
    console.log(this.exercices);
    this.currentExercice = this.exercices[0];
  }

  goToNextExercice(): void {
    this.currentExercice = this.exercices[0 + 1];
  }

  StartTimer(): void {
    while (this.timer > 0) {
      setTimeout(() => {
        this.timer--;
      }, 1000);
    }
  }
}
