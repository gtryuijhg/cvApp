import { Component, Input } from '@angular/core';
import { Language } from '../../../../../../core/models/language';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  @Input() language!: Language;
}
