import { Injectable } from '@angular/core';
import { SoftSkill } from '../models/soft-skill';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillListService {

  private softSkillList: SoftSkill[] = [
    new SoftSkill(
      1,
      [
        'Déterminé',
        'Sérieux',
        'Autonome',
        'Rigoureux',
        'Organisé',
        'A l\'écoute'
      ]
    )
  ];

  getSoftSkillsList(): SoftSkill[] {
    return [...this.softSkillList];
  }
}
