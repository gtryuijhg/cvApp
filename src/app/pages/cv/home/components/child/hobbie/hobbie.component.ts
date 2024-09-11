import { Component, Input } from '@angular/core';
import { Hobbie } from '../../../../../../core/models/hobbie';

@Component({
  selector: 'app-hobbie',
  standalone: true,
  imports: [],
  templateUrl: './hobbie.component.html',
  styleUrl: './hobbie.component.scss'
})
export class HobbieComponent {

  @Input() hobbie!: Hobbie;
}
