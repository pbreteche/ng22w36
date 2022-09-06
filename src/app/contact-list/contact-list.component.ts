import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import data from '../stub/contacts.data';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent{
  contacts: Contact[] = data;

  select(contact: Contact) {
    console.log(contact)
  }
}
