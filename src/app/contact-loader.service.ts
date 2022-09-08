import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactLoaderService {

  constructor(private http: HttpClient) { }

  get(): Observable<Contact[]> {
    return this.http.get('/assets/contacts.json')
      .pipe(
        map(data => {
          return data as Contact[]
        })
      )
  }
}
