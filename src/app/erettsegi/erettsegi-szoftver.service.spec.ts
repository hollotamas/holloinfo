import { TestBed } from '@angular/core/testing';

import { ErettsegiSzoftverService } from './erettsegi-szoftver.service';

describe('ErettsegiSzoftverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErettsegiSzoftverService = TestBed.get(ErettsegiSzoftverService);
    expect(service).toBeTruthy();
  });
});
