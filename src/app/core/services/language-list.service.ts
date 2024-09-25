import { Injectable } from '@angular/core';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {

  private languageList: Language[] = [
    new Language(
      1,
      'Anglais : TOEIC Niveau B1'
    )
  ];

  getLanguageList(): Language[] {
    return [...this.languageList];
  }
}
