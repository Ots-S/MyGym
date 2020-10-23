import { Injectable } from '@angular/core';
import { Serie } from '../model/serie';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  series: Array<Serie> = [];

  constructor() {}

  saveSerie(serie: Serie): void {
    this.series.push(serie);
  }
}
