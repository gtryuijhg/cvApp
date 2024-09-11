import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  private profileList: Profile[] = [
    new Profile(
      1,
      ['Déterminé sérieux et autonome, je recherche une entreprise pour débuter ma carrière avec une formation en alternance.']
    )]
  ;

  getProfile(): Profile[] {
    return [...this.profileList];
  }
}
