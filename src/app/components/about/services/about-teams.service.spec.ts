import { TestBed } from '@angular/core/testing';

import { AboutTeamsService } from './about-teams.service';

describe('AboutTeamsService', () => {
  let service: AboutTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
