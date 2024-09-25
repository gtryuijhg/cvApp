import { Injectable } from '@angular/core';
import { Clickable } from '../models/clickable';

@Injectable({
  providedIn: 'root'
})
export class ClickableListService {

  private clickableList: Clickable[] = [
    
    new Clickable(
      1,
      'Linkedin',
      'https://www.linkedin.com/in/grégoire-huteau-117976151/'
    ),
    new Clickable(
      2,
      'Accessfirst',
      'https://app.assessfirst.com/_/profile/a4b5efd1-gregoire-huteau?lang=fr-FR'
    ),
    new Clickable(
      3,
      'GitHub',
      'https://github.com/gtryuijhg'
    )
  ];

  getClickableList(): Clickable[] {
    return [...this.clickableList];
  }
}
