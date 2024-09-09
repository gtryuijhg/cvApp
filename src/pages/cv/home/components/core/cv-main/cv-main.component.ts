import { Component } from '@angular/core';
import { FormationListComponent } from "../../parent/formation-list/formation-list.component";
import { ExperienceListComponent } from "../../parent/experience-list/experience-list.component";
import { SkillListComponent } from "../../parent/skill-list/skill-list.component";

@Component({
  selector: 'app-cv-main',
  standalone: true,
  imports: [FormationListComponent, ExperienceListComponent, SkillListComponent],
  templateUrl: './cv-main.component.html',
  styleUrl: './cv-main.component.scss'
})
export class CvMainComponent {

}
