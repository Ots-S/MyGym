import { Component, HostBinding, OnInit } from '@angular/core';

import { Serie } from '../../model/serie';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-exercice-counter',
  templateUrl: './exercice-counter.component.html',
  styleUrls: ['./exercice-counter.component.scss'],
})
export class ExerciceCounterComponent implements OnInit {
  timer = 30;
  serieId: string;
  exercices: any;
  currentExerciceNumber: 0;
  currentExercice: any;
  endedExercice = false;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {}

  startTimer(rep: HTMLInputElement, weight: HTMLInputElement): void {
    const serie = new Serie(rep.value, weight.value);
    this.seriesService.saveSerie(serie);
    this.endedExercice = true;
  }
}
