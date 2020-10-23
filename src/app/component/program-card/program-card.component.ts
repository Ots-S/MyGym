import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../../model/program';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent implements OnInit {
  @Input() program: Program;

  constructor() {}

  ngOnInit(): void {}
}
