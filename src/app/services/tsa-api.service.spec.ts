import { TestBed } from '@angular/core/testing';

import { TsaAPIService } from './tsa-api.service';

describe('TsaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TsaAPIService = TestBed.get(TsaAPIService);
    expect(service).toBeTruthy();
  });
});
