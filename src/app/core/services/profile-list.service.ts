import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  private profileList: Profile[] = [
    new Profile(
      1,
      ['Après une reconversion dans la logistique, je recherche une entreprise pour débuter ma carrière avec un CDD ou un CDI en tant que développeur']
    )]
  ;

  getProfile(): Profile[] {
    return [...this.profileList];
  }
}
