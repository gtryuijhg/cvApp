import { Component, Input } from '@angular/core';
import { Skill } from '../../../../../../core/models/skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  @Input() skill!: Skill;

  skillIsShowed!: boolean;

  hoverOnSkill(): void {
    if (!this.skillIsShowed) {
      this.showSkill();
    }
  }

  clickOnSkill(): void {
    if (this.skillIsShowed) {
      this.hideSkill();
    } else {
      this.showSkill();
    }
  }

  hideSkill(): void {
    this.skillIsShowed = false;
  }

  showSkill(): void {
    this.skillIsShowed = true;
  }
}
