import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  private profileList: Profile[] = [
    new Profile(
      1,
      ['Après une formation en informatique, j\'ai dû débuter un travail alimentaire dans le secteur de la logistique, tout en recherchant une entreprise pour préparer un bachelor bac+3 concepteur développeur d\'applications en alternance.']
    )]
  ;

  getProfile(): Profile[] {
    return [...this.profileList];
  }
}
