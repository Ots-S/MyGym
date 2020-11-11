import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../../services/series.service';

@Component({
  selector: 'app-series-recap',
  templateUrl: './series-recap.component.html',
  styleUrls: ['./series-recap.component.scss'],
})
export class SeriesRecapComponent implements OnInit {
  seriesRecap: Array<any>;
  date: Date;
  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesRecap = this.seriesService.storedSeries;
    this.date = new Date();
  }
}
