import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Contact } from './model/contact';
import data from './stub/contacts.data';

@Injectable({
  providedIn: 'root'
})
export class ContactBufferService {
  private subject = new ReplaySubject<Contact[]>(1)

  constructor() {
    this.subject.next(data);
  }
  
  get contactBuffer(): Observable<Contact[]> {
    return this.subject.asObservable();
  }
}
