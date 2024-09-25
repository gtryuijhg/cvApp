import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  private profileList: Profile[] = [
    new Profile(
      1,
      ['Après une reconversion dans la logistique, je recherche une entreprise pour débuter ma carrière avec une formation BAC+5 en alternance en informatique avec l\'EPSI']
    )]
  ;

  getProfile(): Profile[] {
    return [...this.profileList];
  }
}
