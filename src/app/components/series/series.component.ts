import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../models/serie';
import { SeriesService } from '../../services/series.service';
import { ExerciceCounterComponent } from '../exercice-counter/exercice-counter.component';

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
  @ViewChildren(ExerciceCounterComponent)
  exercicesCounters: QueryList<ExerciceCounterComponent>;
  numberOfExercices: number;
  exerciceNumber = 1;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private seriesServices: SeriesService
  ) {}

  ngOnInit(): void {
    this.serieId = this.route.snapshot.paramMap.get('serie');
    this.exercices = this.programService.getExercicesByProgramId(this.serieId);
    this.numberOfExercices = this.exercices.length;
    this.currentExercice = this.exercices[0];
    this.series = this.seriesServices.series;
  }

  goToNextExercice(): void {
    this.currentExercice = this.exercices[0 + 1];
    this.exerciceNumber++;
    console.log(this.exerciceNumber);
    console.log(this.numberOfExercices, 'number of exercies');
    this.seriesServices.storeSeries();
    this.seriesServices.resetSerie();
    this.resetAll();
  }

  resetAll(): void {
    this.exercicesCounters.forEach((c) => c.reset());
  }
}
