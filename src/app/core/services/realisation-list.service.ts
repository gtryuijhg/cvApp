import { Injectable } from '@angular/core';
import { Realisation } from '../models/realisation';

@Injectable({
  providedIn: 'root'
})
export class RealisationListService {

  private realisationList: Realisation[] = [
    new Realisation(
      1,
      'Application web jeu de rôle',
      '/jdr/home'
    ),
    new Realisation(
      2,
      'Application web QCM',
      '/qcm/home'
    )
  ];

  getRealisationList(): Realisation[] {
    return [...this.realisationList];
  }
}
