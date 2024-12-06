import { TestBed } from '@angular/core/testing';

import { ApicomprasService } from './apicompras.service';

describe('ApicomprasService', () => {
  let service: ApicomprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicomprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
