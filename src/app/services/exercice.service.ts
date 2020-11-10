import { Injectable } from '@angular/core';
import datas from '../../assets/programs.json';

@Injectable({
  providedIn: 'root',
})
export class ExerciceService {
  constructor() {}

  getExercices(): any {
    return datas.exercices;
  }

  getCovers(): Array<string> {
    const covers = [];
    datas.exercices.forEach((exercice) => {
      covers.push(exercice.cover);
    });
    console.log(covers, 'covers');
    return covers;
  }
}
