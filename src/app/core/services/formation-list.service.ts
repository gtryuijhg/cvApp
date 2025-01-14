import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationListService {

  private formationList: Formation[] = [
    new Formation(
      1,
      'Bachelor Bac+3 Concepteur Développeur d\'Applications Numériques',
      'Alternance Décembre 2019 / Décembre 2020',
      'EPSI Nantes, île de Nantes'
    ),
    new Formation(
      2,
      'Développeur intégrateur en réalisation d\'applications web',
      'POEC Niveau Bac+2 Juillet 2017 / Septembre 2017',
      'Sigma 2000 Nantes, île de Nantes'
    )
  ];

  getFormationList(): Formation[] {
    return [...this.formationList];
  }
}
