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
}
