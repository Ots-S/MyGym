import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.scss'],
})
export class ProgramViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {}

  programId: string;
  program: any;
  repetitions: object;

  ngOnInit(): void {
    this.programId = this.route.snapshot.paramMap.get('program');
    this.program = this.programService.getProgramById(this.programId);
  }
}
