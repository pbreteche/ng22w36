import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ContactLoaderService } from './contact-loader.service';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactBufferService {
  private subject = new ReplaySubject<Contact[]>(1)
  private contacts: Contact[] = []  

  constructor(private loader: ContactLoaderService) {
    this.loader.get().subscribe((data: Contact[]) => {
      this.contacts = data
      this.subject.next(this.contacts)
    })
  }
  
  get contactBuffer(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  push(contact: Contact) {
    this.contacts.push(contact)
  }
}
