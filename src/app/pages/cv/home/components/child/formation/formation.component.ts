import { Component, Input } from '@angular/core';
import { Formation } from '../../../../../../core/models/formation';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {

  @Input() formation!: Formation;
}
