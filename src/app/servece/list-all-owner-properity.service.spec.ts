import { TestBed } from '@angular/core/testing';

import { ListAllOwnerProperityService } from './list-all-owner-properity.service';

describe('ListAllOwnerProperityService', () => {
  let service: ListAllOwnerProperityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAllOwnerProperityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
