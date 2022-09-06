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

  // Retourne le sujet en tant qu'Observable
  // Empèche l'extérieur d'émettre de nouveaux états
  get selectedContact(): Observable<Contact> {
    return this.subject.asObservable();
  }

  selectContact(contact: Contact) {
    this.subject.next(contact);
  }
}
