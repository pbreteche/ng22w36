import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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
        }),
        catchError(
          (err: HttpErrorResponse) => {
            if (404 == err.status) {
              return throwError(() => new Error('La ressource n\'a pas été trouvée'))
            }

            return throwError(() => new Error('Une erreur s\'est produite'))
          }
        )
      )
  }
}
