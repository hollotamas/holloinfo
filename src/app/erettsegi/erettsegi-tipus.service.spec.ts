import { TestBed } from '@angular/core/testing';

import { ErettsegiTipusService } from './erettsegi-tipus.service';

describe('ErettsegiTipusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErettsegiTipusService = TestBed.get(ErettsegiTipusService);
    expect(service).toBeTruthy();
  });
});
