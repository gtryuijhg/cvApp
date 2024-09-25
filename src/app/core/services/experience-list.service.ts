import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceListService {

  private experienceList: Experience[] = [
    new Experience(
      1,
      'Alternance - Opérateur logistique',
      '23/08/2021 - 31/08/2023',
      'Le Breton Outillage, Carquefou',
      [
        'Gestion de stocks, outils : PDA + logiciel Iteck'
      ]
    ),
    new Experience(
      2,
      'Alternance - Analyste développeur junior',
      '2/12/2019 - 1/12/2020',
      'CGI, Carquefou',
      [
        'Réorganisation d\'une base de données : Création de scripts SQL et refactorisation de code',
        'Ajout de fonctionnalités sur un logiciel : Création d\'un webservice et tests'
      ]
    ),
    new Experience(
      3,
      'Stage - Développeur web',
      '03/2017',
      'SII, Bouguenais',
      [
        'Découverte du métier de développeur'
      ]
    )
  ];

  getExperienceList(): Experience[] {
    return [...this.experienceList];
  }
  
}
