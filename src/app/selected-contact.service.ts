import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class SelectedContactService {
  // Ce replay subject permet de récupérer les "1" dernières valeurs
  // au moment de la souscription
  private subject = new ReplaySubject<Contact>(1)

  constructor() {
    // charger un éventuel contact depuis le WebStorage
    const serializedContact = localStorage.getItem('selected-contact')
    if (serializedContact) {
      const contact = JSON.parse(serializedContact)
      this.subject.next(contact);
    }
  }

  // Retourne le sujet en tant qu'Observable
  // Empèche l'extérieur d'émettre de nouveaux états
  get selectedContact(): Observable<Contact> {
    return this.subject.asObservable();
  }

  selectContact(contact: Contact) {
    this.subject.next(contact);
    // enregistrer (écraser) le contact dans le web storage
    localStorage.setItem('selected-contact', JSON.stringify(contact));
  }
}
