import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ContactResolverService } from './contact-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class ContactTitleResolverService implements Resolve<string>{

  constructor(private contactResolver: ContactResolverService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {
    const contact = await this.contactResolver.resolve(route, state);

    return `Détail de ${contact?.firstName ?? ''} ${contact?.lastName ?? ''}`;
  }
}
