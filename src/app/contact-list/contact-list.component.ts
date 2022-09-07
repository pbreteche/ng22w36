import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactBufferService } from '../contact-buffer.service';
import { Contact } from '../model/contact';
import { SelectedContactService } from '../selected-contact.service';
import data from '../stub/contacts.data';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent{
  contacts$: Observable<Contact[]>;

  constructor(
    private selectedContact: SelectedContactService,
    contactBuffer: ContactBufferService
  ) {
    this.contacts$ = contactBuffer.contactBuffer
  }

  select(contact: Contact) {
    this.selectedContact.selectContact(contact)
  }
}
