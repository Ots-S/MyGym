import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-card',
  templateUrl: './exercice-card.component.html',
  styleUrls: ['./exercice-card.component.scss'],
})
export class ExerciceCardComponent implements OnInit {
  @Input() exercice: any;
  title: string;
  content: string;

  constructor() {}

  ngOnInit(): void {}
}
