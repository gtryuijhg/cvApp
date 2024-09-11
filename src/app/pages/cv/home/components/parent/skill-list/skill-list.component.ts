import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../../../core/models/skill';
import { SkillListService } from '../../../../../../core/services/skill-list.service';
import { SkillComponent } from '../../child/skill/skill.component';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent implements OnInit {

  title!: string;
  skillList!: Skill[];

  constructor(private skillListService: SkillListService) {}
  
  ngOnInit(): void {
      
    this.title = "Compétences";

    this.skillList = this.skillListService.getSkillList();
  }
}
