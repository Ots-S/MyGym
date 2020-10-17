import { Injectable } from '@angular/core';
import datas from '../../assets/programs.json';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor() {}

  getPrograms(): any {
    return datas.programs;
  }

  getProgramById(id): object {
    return datas.programs.find((program) => program.id.toString() === id);
  }

  getExercicesByProgramId(id): any {
    const program = datas.programs.find(
      (program) => program.id.toString() === id
    );
    return program.exercices;
  }
}
