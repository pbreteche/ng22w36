import { Component } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-create-form',
  templateUrl: './contact-create-form.component.html',
  styleUrls: ['./contact-create-form.component.scss']
})
export class ContactCreateFormComponent {
  contact = new Contact()


}
