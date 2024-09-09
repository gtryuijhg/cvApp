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
        'Jquery',
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
        'Spring',
        'Springboot',
        'Symfony',
        'Doctrine',
        'Hibernate'
      ]
    ),
    new Skill(
      3,
      'Versionning',
      [
        'GIT',
        'CVS'
      ]
    ),
    new Skill(
      4,
      'Outils',
      [
        'Sublime Text',
        'RAD',
        'Eclipse',
        'Spring Tool Suite',
        'Visual studio Code'
      ]
    ),
    new Skill(
      5,
      'Langues',
      [
        'Anglais niveau B1'
      ]
    )
  ];

  getSkillList(): Skill[] {
    return [...this.skillList];
  }
}
