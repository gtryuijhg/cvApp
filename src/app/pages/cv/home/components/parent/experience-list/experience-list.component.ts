import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../../../../core/models/experience';
import { ExperienceListService } from '../../../../../../core/services/experience-list.service';
import { ExperienceComponent } from '../../child/experience/experience.component';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent implements OnInit {

  title!: string;
  experienceList!: Experience[];

  constructor(private experienceListService: ExperienceListService) {}

  ngOnInit(): void {
      
    this.title = 'Expériences';

    this.experienceList = this.experienceListService.getExperienceList();
  }
}
