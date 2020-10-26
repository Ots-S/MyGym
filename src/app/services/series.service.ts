import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  series: Array<Serie> = [];
  storedSeries: any = [];

  constructor() {}

  saveSerie(serie: Serie): void {
    this.series.push(serie);
  }

  storeSeries(): void {
    const exerciceSeries = { title: '', series: [] };
    for (const serie of this.series) {
      exerciceSeries.title = serie.exercice;
      const stats = { rep: serie.rep, weight: serie.weight };
      exerciceSeries.series.push(stats);
    }
    this.storedSeries.push(exerciceSeries);
  }

  resetSerie(): void {
    this.series = [];
  }
}
