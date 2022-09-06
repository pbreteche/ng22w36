import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import data from '../stub/contacts.data'

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  contact: Contact = data[0]
}
