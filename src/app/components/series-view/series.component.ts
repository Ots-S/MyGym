import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../models/serie';
import { SeriesService } from '../../services/series.service';
import { ExerciceCounterComponent } from '../exercice-counter/exercice-counter.component';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  serieId: string;
  exercices: any;
  currentExerciceNumber: 0;
  currentExercice: any;
  endedExercice = false;
  series: Array<Serie>;
  @ViewChildren(ExerciceCounterComponent)
  exercicesCounters: QueryList<ExerciceCounterComponent>;
  numberOfExercices: number;
  exerciceNumber = 0;
  counter$: Observable<number>;
  timer = 5;
  serieIndex = 1;
  isRestTime = false;

  @ViewChildren(ExerciceCounterComponent) child: QueryList<
    ExerciceCounterComponent
  >;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private seriesServices: SeriesService
  ) {}

  ngOnInit(): void {
    this.serieId = this.route.snapshot.paramMap.get('serie');
    this.exercices = this.programService.getExercicesByProgramId(this.serieId);
    this.numberOfExercices = this.exercices.length - 1;
    this.currentExercice = this.exercices[0];
    this.series = this.seriesServices.series;
    this.currentExercice = this.exercices[this.exerciceNumber];
  }

  goToNextExercice(): void {
    this.exerciceNumber++;
    this.currentExercice = this.exercices[this.exerciceNumber];
    this.seriesServices.storeSeries();
    this.seriesServices.resetSerie();
    this.resetAll();
    this.child.forEach((child) => child.undone());
    this.serieIndex = 1;
  }

  endProgram(): void {
    this.seriesServices.storeSeries();
    this.seriesServices.resetSerie();
    this.resetAll();
  }

  resetAll(): void {
    this.exercicesCounters.forEach((c) => c.reset());
  }

  startCountdown(): void {
    this.isRestTime = true;
    this.serieIndex = this.serieIndex + 1;
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer < 0) {
        clearInterval(interval);
        this.timer = 5;
        this.isRestTime = false;
      }
    }, 1000);
  }
}
