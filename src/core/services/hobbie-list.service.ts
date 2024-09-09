import { Injectable } from '@angular/core';
import { Hobbie } from '../models/hobbie';

@Injectable({
  providedIn: 'root'
})
export class HobbieListService {

  private hobbieList: Hobbie[] = [
    new Hobbie(
      1,
      'Musique',
      'Piano'
    ),
    new Hobbie(
      2,
      'Informatique',
      'Jeux vidéo RPG, Développement web'
    )
  ];

  getHobbieList(): Hobbie[] {
    return [...this.hobbieList];
  }
}
