import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Contact } from './model/contact';
import data from './stub/contacts.data';

@Injectable({
  providedIn: 'root'
})
export class ContactBufferService {
  private subject = new ReplaySubject<Contact[]>(1)
  private contacts: Contact[] = data

  constructor() {
    this.subject.next(this.contacts);
  }
  
  get contactBuffer(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  push(contact: Contact) {
    this.contacts.push(contact)
  }
}
