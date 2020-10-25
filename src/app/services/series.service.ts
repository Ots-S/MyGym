import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  series: Array<Serie> = [];
  storedSeries: Array<Serie> = [];
  sortSeries: any;

  constructor() {}

  saveSerie(serie: Serie): void {
    this.series.push(serie);
  }

  storeSeries(): void {
    for (const serie of this.series) {
      const title = serie.exercice;
      this.sortSeries = { title: title };
      this.sortSeries.series = [];
      const stats = { serie: serie.rep, weight: serie.weight };
      this.sortSeries.series.push(stats);
      this.storedSeries.push(serie);
    }
    console.log(this.sortSeries, 'SortSeries');
  }

  resetSerie(): void {
    this.series = [];
  }
}
