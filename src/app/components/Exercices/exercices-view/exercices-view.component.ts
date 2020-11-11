import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../../../services/exercice.service';

@Component({
  selector: 'app-exercices-view',
  templateUrl: './exercices-view.component.html',
  styleUrls: ['./exercices-view.component.scss'],
})
export class ExercicesViewComponent implements OnInit {
  exercices: any;

  constructor(private exerciceService: ExerciceService) {}

  ngOnInit(): void {
    this.exercices = this.exerciceService.getExercices();
  }
}
