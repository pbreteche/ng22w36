import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactBufferService } from '../contact-buffer.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent{
  contacts$: Observable<Contact[]>;

  constructor(
    contactBuffer: ContactBufferService
  ) {
    this.contacts$ = contactBuffer.contactBuffer
  }
}
