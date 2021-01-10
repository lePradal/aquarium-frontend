import { TestBed } from '@angular/core/testing';

import { AquariumService } from './aquarium.service';

describe('AquariumService', () => {
  let service: AquariumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquariumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
