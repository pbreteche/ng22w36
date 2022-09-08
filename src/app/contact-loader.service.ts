import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, throwError } from 'rxjs';
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

  getPromise(): Promise<Contact[]> {
    return firstValueFrom(this.http.get('/assets/contacts.json')
      .pipe(
        map(data => {
          return data as Contact[]
        })
    ))
  }

  post(contact: Contact): Observable<{id: number}> {
    return this.http.post('/contact', contact)
      .pipe(
        map(data => {
          return data as {id: number}
        }),
        catchError(
        (err: HttpErrorResponse) => {
          return throwError(() => new Error('Une erreur s\'est produite'))
        }
      ))
  }
}
