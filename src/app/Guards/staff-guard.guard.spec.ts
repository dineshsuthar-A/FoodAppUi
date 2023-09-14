import { TestBed } from '@angular/core/testing';

import { StaffGuardGuard } from './staff-guard.guard';

describe('StaffGuardGuard', () => {
  let guard: StaffGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
