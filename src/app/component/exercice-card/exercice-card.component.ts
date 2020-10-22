import { Component, Input, OnInit } from '@angular/core';
import { Exercice } from '../../interface/exercice';

@Component({
  selector: 'app-exercice-card',
  templateUrl: './exercice-card.component.html',
  styleUrls: ['./exercice-card.component.scss'],
})
export class ExerciceCardComponent implements OnInit {
  @Input() exercice: Exercice;

  constructor() {}

  ngOnInit(): void {}
}
