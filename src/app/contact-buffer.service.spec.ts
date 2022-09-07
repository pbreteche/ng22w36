import { TestBed } from '@angular/core/testing';

import { ContactBufferService } from './contact-buffer.service';

describe('ContactBufferService', () => {
  let service: ContactBufferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactBufferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
