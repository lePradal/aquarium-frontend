import { TestBed } from '@angular/core/testing';

import { AquariumGuard } from './aquarium.guard';

describe('AquariumGuard', () => {
  let guard: AquariumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AquariumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
