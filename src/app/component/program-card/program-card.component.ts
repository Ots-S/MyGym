import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent implements OnInit {
  @Input() program: any;
  title: string;
  content: string;

  constructor() {}

  ngOnInit(): void {}
}
