import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../../../services/exercice.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: Array<string>;

  constructor(private exerciceService: ExerciceService) {}

  ngOnInit(): void {
    this.images = this.exerciceService.getCovers();
  }
}
