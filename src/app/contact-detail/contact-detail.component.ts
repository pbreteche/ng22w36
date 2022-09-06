import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { SelectedContactService } from '../selected-contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  selectedContact$: Observable<Contact>

  constructor(selectedContactService: SelectedContactService) {
    this.selectedContact$ = selectedContactService.selectedContact
  }
}
