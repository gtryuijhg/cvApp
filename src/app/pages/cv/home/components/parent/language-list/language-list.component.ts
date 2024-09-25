import { Component, OnInit } from '@angular/core';
import { Language } from '../../../../../../core/models/language';
import { LanguageListService } from '../../../../../../core/services/language-list.service';
import { LanguageComponent } from '../../child/language/language.component';

@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [LanguageComponent],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.scss'
})
export class LanguageListComponent implements OnInit {

  title!: string;
  languageList!: Language[];

  constructor(private languageListService: LanguageListService) {}
  
  ngOnInit(): void {
      
    this.title = 'Langues';

    this.languageList = this.languageListService.getLanguageList();
  }
}
