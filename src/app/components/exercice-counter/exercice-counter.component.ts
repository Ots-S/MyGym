import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  serieId: string;
  exercices: any;
  currentExerciceNumber: 0;
  currentExercice: any;
  done: boolean;

  @Output() newItemEvent = new EventEmitter<void>();

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {}

  startChrono(): void {
    alert('ho');
    this.newItemEvent.emit();
  }

  startTimer(): void {
    this.startChrono();
    const serie = new Serie(
      this.exercice,
      this.rep.toString(),
      this.weight.toString()
    );
    this.seriesService.saveSerie(serie);

    this.done = true;
  }

  reset(): void {
    this.rep = null;
    this.weight = null;
  }

  undone(): void {
    this.done = false;
  }
}
