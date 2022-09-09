import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ContactBufferService } from './contact-buffer.service';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Contact|undefined> {

  constructor(private buffer: ContactBufferService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Contact|undefined> {
    const idParam = route.paramMap.get('id')
    if (idParam != null) {
      return this.buffer.find(+idParam)
    }

    return Promise.resolve(undefined);
  }
}
