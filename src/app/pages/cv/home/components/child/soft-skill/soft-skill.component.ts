import { Component, Input } from '@angular/core';
import { SoftSkill } from '../../../../../../core/models/soft-skill';

@Component({
  selector: 'app-soft-skill',
  standalone: true,
  imports: [],
  templateUrl: './soft-skill.component.html',
  styleUrl: './soft-skill.component.scss'
})
export class SoftSkillComponent {

  @Input() softSkill!: SoftSkill;
}
