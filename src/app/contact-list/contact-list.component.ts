import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../model/contact';
import { SelectedContactService } from '../selected-contact.service';
import data from '../stub/contacts.data';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent{
  contacts: Contact[] = data;

  constructor(
    private selectedContactService: SelectedContactService
    ) {}

  select(contact: Contact) {
    this.selectedContactService.selectContact(contact)
  }
}
