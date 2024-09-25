import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillListService {

  private skillList: Skill[] = [
    new Skill(
      1,
      'Frontend',
      [
        'HTML',
        'CSS',
        'Bootstrap',
        'Javascript',
        'Angular'
      ]
    ),
    new Skill(
      2,
      'Backend',
      [
        'PHP',
        'SQL',
        'JAVA',
        'JEE',
        'Springboot',
        'Hibernate'
      ]
    ),
    new Skill(
      3,
      'Outils',
      [
        'GIT',
        'Spring Tool Suite',
        'Visual Studio Code',
        'Méthode Agile',
        'CANBAN',
        'Trello',
        'Postman',
        'Terminal',
        'SonarQube'
      ]
    )
  ];

  getSkillList(): Skill[] {
    return [...this.skillList];
  }
}
