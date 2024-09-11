import { Component, Input } from '@angular/core';
import { Experience } from '../../../../../../core/models/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  @Input() experience!: Experience;
}
