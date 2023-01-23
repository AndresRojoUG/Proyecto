import { TestBed } from '@angular/core/testing';

import { ProhibirService } from './prohibir.service';

describe('ProhibirService', () => {
  let service: ProhibirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProhibirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
