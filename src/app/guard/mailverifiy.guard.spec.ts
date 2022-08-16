import { TestBed } from '@angular/core/testing';

import { MailverifiyGuard } from './mailverifiy.guard';

describe('MailverifiyGuard', () => {
  let guard: MailverifiyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MailverifiyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
