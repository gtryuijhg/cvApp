import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private contacts: Contact[] = [
    new Contact(
      1,
      '3006 Allée des Jardins, Drain'
    ),
    new Contact(
      2,
      'gregoire.huteau@hotmail.com'
    ),
    new Contact(
      3,
      '06 36 67 24 50'
    ),
    new Contact(
      4,
      'Permis B'
    ),
    new Contact(
      5,
      'https://www.linkedin.com/in/grégoire-huteau-117976151/'
    ), 
    new Contact(
      6,
      'AccessFirst : https://app.assessfirst.com/_/profile/a4b5efd1-gregoire-huteau?lang=fr-FR'
    ),
    new Contact(
      7,
      'Github : https://github.com/gtryuijhg'
    )
  ];

  getContactList(): Contact[] {
    return [...this.contacts];
  }
}
