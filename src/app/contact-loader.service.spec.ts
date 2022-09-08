import { TestBed } from '@angular/core/testing';

import { ContactLoaderService } from './contact-loader.service';

describe('ContactLoaderService', () => {
  let service: ContactLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
