import { TestBed } from '@angular/core/testing';

import { SelectedContactService } from './selected-contact.service';

describe('SelectedContactService', () => {
  let service: SelectedContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
