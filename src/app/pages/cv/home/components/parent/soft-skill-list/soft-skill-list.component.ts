import { Component, OnInit } from '@angular/core';
import { SoftSkillComponent } from '../../child/soft-skill/soft-skill.component';
import { SoftSkillListService } from '../../../../../../core/services/soft-skill-list.service';
import { SoftSkill } from '../../../../../../core/models/soft-skill';

@Component({
  selector: 'app-soft-skill-list',
  standalone: true,
  imports: [SoftSkillComponent],
  templateUrl: './soft-skill-list.component.html',
  styleUrl: './soft-skill-list.component.scss'
})
export class SoftSkillListComponent implements OnInit {

  title!: string;
  softSkillList!: SoftSkill[];
  
  constructor(private softSkillListService: SoftSkillListService) {}

  ngOnInit(): void {
    
    this.title = 'Soft skills';

    this.softSkillList = this.softSkillListService.getSoftSkillsList();
  }

}
