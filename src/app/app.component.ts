import { Component } from '@angular/core';
import { Contact } from './model/contact';
import data from './stub/contacts.data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedContact: Contact = data[0]
}
