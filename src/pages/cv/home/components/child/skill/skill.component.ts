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

  userHasClicked!: boolean;
  skillIsShowed!: boolean;

  hoverOnSkill(): void {
    this.showSkill();
  }

  outOfSkill(): void {
    if (!this.userHasClicked) {
      this.hideSkill();
    }
  }

  clickOnSkill(): void {
    if (this.userHasClicked) {
      this.hideSkill();
    } else {
      this.showSkill();
      this.userHasClicked = true;
    }
  }

  hideSkill(): void {
    this.skillIsShowed = false;
    this.userHasClicked = false;
  }

  showSkill(): void {
    this.skillIsShowed = true;
  }
}
