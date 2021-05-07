import { TestBed } from '@angular/core/testing';

import { AuthinticationGuard } from './authintication.guard';

describe('AuthinticationGuard', () => {
  let guard: AuthinticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthinticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
