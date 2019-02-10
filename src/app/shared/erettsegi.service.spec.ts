import { TestBed } from '@angular/core/testing';

import { ErettsegiService } from './erettsegi.service';

describe('ErettsegiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErettsegiService = TestBed.get(ErettsegiService);
    expect(service).toBeTruthy();
  });
});
