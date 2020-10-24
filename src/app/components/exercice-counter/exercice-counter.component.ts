import { Component, Input, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

import { Serie } from '../../models/serie';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-exercice-counter',
  templateUrl: './exercice-counter.component.html',
  styleUrls: ['./exercice-counter.component.scss'],
})
export class ExerciceCounterComponent implements OnInit {
  @Input() index: number;
  @Input() exercice: string;
  rep: number;
  weight: number;
  timer = 30;
  serieId: string;
  exercices: any;
  currentExerciceNumber: 0;
  currentExercice: any;
  counter$: Observable<number>;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {}

  startTimer(): void {
    const serie = new Serie(
      this.exercice,
      this.rep.toString(),
      this.weight.toString()
    );
    this.seriesService.saveSerie(serie);
    this.counter$ = timer(0, 1000).pipe(
      take(this.timer),
      map(() => --this.timer)
    );
  }

  reset(): void {
    this.rep = 0;
    this.weight = 0;
  }
}
