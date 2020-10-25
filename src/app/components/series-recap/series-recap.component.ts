import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-series-recap',
  templateUrl: './series-recap.component.html',
  styleUrls: ['./series-recap.component.scss'],
})
export class SeriesRecapComponent implements OnInit {
  seriesRecap: Array<Serie>;
  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesRecap = this.seriesService.storedSeries;
  }
}
