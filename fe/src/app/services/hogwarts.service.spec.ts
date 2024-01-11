import { TestBed } from '@angular/core/testing';

import { HogwartsService } from './hogwarts.service';

describe('HogwartsService', () => {
  let service: HogwartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HogwartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
