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
        'Développement logiciel : Création de webservices en JEE et de scripts SQL',
        'Changement d\'organisation de base de données et refactorisation de code',
        'Outils : CANBAN, méthode agile, SonarQube, Postman, Trello, RAD'
      ]
    ),
    new Experience(
      3,
      'Stage - Développeur web',
      '20/03/2017 - 24/03/2017',
      'SII, Bouguenais',
      [
        'Découverte du métier de développeur',
        'Outils : CANBAN, SonarQube, Jenkins, Terminal'
      ]
    )
  ];

  getExperienceList(): Experience[] {
    return [...this.experienceList];
  }
  
}
