import { Component, Input } from '@angular/core';
import { Clickable } from '../../../../../../core/models/clickable';

@Component({
  selector: 'app-clickable',
  standalone: true,
  imports: [],
  templateUrl: './clickable.component.html',
  styleUrl: './clickable.component.scss'
})
export class ClickableComponent {

  @Input() clickable!: Clickable;
}
