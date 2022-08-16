import { TestBed } from '@angular/core/testing';

import { PreventregisterandloginGuard } from './preventregisterandlogin.guard';

describe('PreventregisterandloginGuard', () => {
  let guard: PreventregisterandloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventregisterandloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
