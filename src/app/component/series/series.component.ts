import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../model/serie';
import { SeriesService } from '../../services/series.service';

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
  weight: number;
  endedExercice = false;
  series: Array<Serie>;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private serieServices: SeriesService
  ) {}

  ngOnInit(): void {
    this.serieId = this.route.snapshot.paramMap.get('serie');
    this.exercices = this.programService.getExercicesByProgramId(this.serieId);
    this.currentExercice = this.exercices[0];
    this.series = this.serieServices.series;
  }

  goToNextExercice(): void {
    this.currentExercice = this.exercices[0 + 1];
  }
}
