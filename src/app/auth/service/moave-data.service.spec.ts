import { TestBed } from '@angular/core/testing';

import { MoaveDataService } from './moave-data.service';

describe('MoaveDataService', () => {
  let service: MoaveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoaveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
