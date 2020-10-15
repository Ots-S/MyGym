import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../../assets/programs.json';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.scss'],
})
export class ProgramViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  programId: string;
  program: object;

  ngOnInit(): void {
    this.programId = this.route.snapshot.paramMap.get('program');
    this.program = data.programs.find(
      (program) => program.id.toString() === this.programId
    );
  }
}
