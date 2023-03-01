import { TestBed } from '@angular/core/testing';

import { CodigosErrorService } from './codigos-error.service';

describe('CodigosErrorService', () => {
  let service: CodigosErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigosErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
