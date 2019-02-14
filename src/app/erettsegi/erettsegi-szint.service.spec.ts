import { TestBed } from '@angular/core/testing';

import { ErettsegiSzintService } from './erettsegi-szint.service';

describe('ErettsegiSzintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErettsegiSzintService = TestBed.get(ErettsegiSzintService);
    expect(service).toBeTruthy();
  });
});
