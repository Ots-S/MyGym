import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  series: Array<Serie> = [];
  storedSeries: Array<Serie> = [];

  constructor() {}

  saveSerie(serie: Serie): void {
    this.series.push(serie);
    console.log('series', this.series);
  }

  storeSeries(): void {
    for (const serie of this.series) {
      this.storedSeries.push(serie);
    }
    console.log('storedSeries', this.storedSeries);
  }

  resetSerie(): void {
    this.series = [];
  }
}
