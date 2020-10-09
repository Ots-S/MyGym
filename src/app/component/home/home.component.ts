import { Component, OnInit } from '@angular/core';
import { Program } from '../program';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  program: Program = {
    id: 1,
    name: 'Haut du corps',
  };

  constructor() {}

  ngOnInit(): void {}
}
