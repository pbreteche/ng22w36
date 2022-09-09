import { TestBed } from '@angular/core/testing';

import { ContactTitleResolverService } from './contact-title-resolver.service';

describe('ContactTitleResolverService', () => {
  let service: ContactTitleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactTitleResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
