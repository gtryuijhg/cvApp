import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private contactList: Contact[] = [

    new Contact(
      1,
      [
        'Mobilité : Pays de la Loire',
        'gregoire.huteau@hotmail.com',
        '06 36 67 24 50',
        'Permis B, Voiture'
      ]
    )
  ];

  getContactList(): Contact[] {
    return [...this.contactList];
  }
}
