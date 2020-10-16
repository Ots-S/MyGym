import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private programService: ProgramService) {}

  programs: Array<object>;

  ngOnInit(): void {
    this.programs = this.programService.getPrograms();
  }
}
