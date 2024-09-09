import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../../../../core/models/contact';
import { ContactListService } from '../../../../../../core/services/contact-list.service';
import { ContactComponent } from '../../child/contact/contact.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit {

  title!: string;
  contactList!: Contact[];

  constructor(private contactListService: ContactListService) {}

  ngOnInit(): void {
      
    this.title = 'Contact';

    this.contactList = this.contactListService.getContactList();
  }
}
