import { Component, OnInit } from '@angular/core';
import { Program } from '../program';
import data from '../../../assets/programs.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  programs: Array<object>;

  ngOnInit(): void {
    this.programs = data.programs;
    console.log(data.programs);
  }
}
